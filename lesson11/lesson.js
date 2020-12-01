//ВЫВОД СООБЩЕНИЯ НА ЭКРАН
m = (thisObj, caller, message, style = "") => {
    let styleSpan = ""
    let styleP = ""
    let callerName = caller.name
    let thisObjName = thisObj.name
    if (callerName == thisObjName) {
        callerName = "Я"
        message = message.replace("меня", "себя")
    }
    if (style) {
        styleP = " style = '" + style + ";'"
    }
    styleSpan = "style = 'font-weight:bold; color:" + thisObj.color + ";'"
    L.b("<p " + styleP + "><span " + styleSpan + ">" + thisObjName.toUpperCase() + ":</span> " + callerName + " " + message + " .</p>")
}

// ОБЪЕКТ "ЧЕЛОВЕК"
let man = {
    name: "Человек",
    color: "maroon",
    cardList: [
        { Num: "1111222233334444" },
        { Num: "9999888877775555" },
        { Num: "3412341234123414" },
        { Num: "3412341234123413" },
        { Num: "3412341234123416" },
        { Num: "3412341234123417" },
        { Num: "3412341234123418" },
        { Num: "3412341234123419" },
        { Num: "12341234" }
    ],
    insertCard: function(caller) {
        m(this, caller, "попросил меня вставить карту")
        let r = L.r(0, 1)
        //let r = L.r(0, this.cardList.length - 1)
        let isWrongSide = (L.r(0, 100) <= 5)
        caller.takeCard(this, this.cardList[r], isWrongSide)
    },
    inputPIN: function(caller) {
        m(this, caller, "попросил меня ввести ПИН-код")
        let codeList = ["1234"]
        //let codeList = ["1234", "5678"]
        let PIN = codeList[L.r(0, codeList.length - 1)]
        caller.takePIN(this, PIN)
    },
    chooseOperation: function(caller, opeartionList) {
        m(this, caller, "попросил меня выбрать одну из возможных операций: " + operationList)
        if (operationList.includes("Give")) {
            caller.giveMoney(this)
        }
        caller.giveMoney(this)
    },
    inputSum: function(caller) {
        m(this, caller, "попросил меня указать желаемую сумму")
        caller.giveSum(this, L.r(1000, 100000))
    },
    takeMoney: function(caller) {
        m(this, caller, "попросил меня взять деньги")
    },
    takeCheck: function(caller) {
        m(this, caller, "попросил меня взять чек")
    },
    takeCard: function(caller) {
        m(this, caller, "попросил меня взять карту")
    },
    takeInfo: function(caller, info) {
        //Alt+0171 " // Alt+0187 "
        m(this, caller, "попросил меня ознакомиться со следующей информацией: \"" + info + "\"","color:red;")
    }
}

// ОБЪЕКТ "СЕРВЕР"
let server = {
    name: "Сервер",
    color: "blue",
    cardList: [
        { Num: "1111222233334444", PIN: "1234", EDate: "01.11.2020" },
        { Num: "9999888877775555", PIN: "5476", EDate: "31.12.2020" },
        { Num: "1999888877775555", PIN: "1111", EDate: "31.12.2020" },
        { Num: "2999888877775555", PIN: "2222", EDate: "31.12.2020" },
        { Num: "3999888877775555", PIN: "3333", EDate: "31.12.2020" },
        { Num: "4999888877775555", PIN: "4444", EDate: "31.12.2020" },
        { Num: "5999888877775555", PIN: "5555", EDate: "31.12.2020" },
        { Num: "6999888877775555", PIN: "6666", EDate: "31.12.2020" },
        { Num: "7999888877775555", PIN: "7777", EDate: "31.12.2020" },
    ],
    findCard: function(cardNum) {
        let card_i
        for (let i = 0; i < this.cardList.length; i++) {
            card_i = this.cardList[i]
            if (cardNum === card_i.Num) {
                return card_i
            }
        }
        return null
    },
    checkCard: function(caller, cardNum) {
        // ПРОВЕРКА ПРИНАДЛЕЖНОСТИ КАРТЫ БАНКУ - КОД ОШИБКИ 101
        // ПРОВЕРКА СРОКА ДЕЙСТВИЯ КАРТЫ - КОД ОШИБКИ 102
        m(this, caller, "попросил меня проверить карту")
        let card = this.findCard(cardNum)
        let result = card ? true : false
        caller.takeCardCheckResult(this, result)
    },
    checkPIN: function(caller, cardNum, PIN) {
        m(this, caller, "попросил меня проверить ПИН-код")
        let card = this.findCard(cardNum)
        let result = false
        if (card) {
            result = (card.PIN === PIN)
        }
        caller.takePINCheckResult(this, result)
    },
    checkSum: function(caller) {
        m(this, caller, "попросил меня проверить сумму")
        caller.takeSumCheckResult(this)
    }
}

// ОБЪЕКТ "БАНКОМАТ"
let ATM = {
    name: "Банкомат",
    color: "green",
    server: server,
    sum: 50000,
    operationList: [ "Take", "Give", "Pay", "ShowRest" ],
    start: function(caller) {
        this.man = caller
        let p = L.r(1, 100)
        if (p <= 5) {
            caller.takeInfo(this, "Отсутствует связь с сервером!!!")
        } else {
            caller.insertCard(this)
        }
    },
    takeCard: function(caller, card, isWrongSide) {
        m(this, caller, "попросил меня взять карту")
        this.card = card
        if (this.checkCard(this, card, isWrongSide)) {
            this.server.checkCard(this, card.Num)
        } else {
            this.card = null
            caller.takeCard(this)
        }
    },
    checkCard: function(caller, card, isWrongSide) {
        m(this, caller, "попросил меня проверить карту")
        if (isWrongSide) {
            this.man.takeInfo(this, "Карта вставлена неверно")
            return false
        }
        if (card.Num.length != 16) {
            this.man.takeInfo(this, "Вы вставили не ту карту")
            return false
        }
        return true
    },
    takeCardCheckResult: function(caller, result) {
        m(this, caller, "попросил меня получить результат проверки карты")
        if (!result) {
            this.man.takeInfo(this, "Карта не принадлежит нашему банку")
        } else {
            this.man.inputPIN(this)
        }
    },
    takePIN: function(caller, PIN) {
        m(this, caller, "попросил меня принять ПИН-код")
        this.server.checkPIN(this, this.card.Num, PIN)
    },
    takePINCheckResult: function(caller, result) {
        m(this, caller, "попросил меня получить результат проверки ПИН-кода")
        if (result) {
            let operationActiveList = [...this.operationList]
            if (!this.sum) {
                this.man.takeInfo(this, "Операция выдачи денег временно недоступна!!!")
                operationActiveList.splice(operationActiveList.indexOf("Give"), 1)
            }
            this.man.chooseOperation(this, operationActiveList)
        } else {
            this.man.takeInfo(this, "ПИН код введен неверно!!!")
        }
    },
    giveMoney: function(caller) {
        m(this, caller, "попросил меня выдать деньги")
        caller.inputSum(this)
    },
    giveSum: function(caller, sum) {
        m(this, caller, "попросил меня выдать указанную сумму")
        if (L.r(1, 100) <= 5) {
            this.man.takeInfo(this, "Отсутствует техническая возможность выдачи за один раз необходимого количества купюр")
        } else {
            if (this.checkSum(this, sum)) {
                this.server.checkSum(this, sum)
            } else {
                this.man.takeInfo(this, "В банкомате отсутствует нужная сумма денег!!!")
            }
        }
    },
    checkSum: function(caller, sum) {
        m(this, caller, "попросил меня проверить наличие указанной суммы")
        return sum <= this.sum
    },
    takeSumCheckResult: function(caller) {
        m(this, caller, "попросил меня получить результат проверки указанной суммы")
        this.man.takeMoney(this)
        this.printCheck(this)
        this.card = null
        this.man.takeCard(this)
    },
    printCheck: function(caller) {
        m(this, caller, "попросил меня распечатать чек")
        if (L.r(1, 100) <= 90) {
            this.man.takeInfo(this, "В банкомате закончилась краска для печати чеков")
        } else {
            this.man.takeCheck(this)
        }
    }
}

//ЗАПУСК
L.b("<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>")
ATM.start(man)