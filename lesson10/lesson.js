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
        {
            Num: "1111222233334444",
            PIN: 1234
        },
        {
            Num: "9999888877775555",
            PIN: 9875
        }
    ],
    insertCard: function(caller) {
        m(this, caller, "попросил меня вставить карту")
        caller.takeCard(this)
    },
    inputPIN: function(caller) {
        m(this, caller, "попросил меня ввести ПИН-код")
        caller.takePIN(this)
    },
    chooseOperation: function(caller) {
        m(this, caller, "попросил меня выбрать операцию")
        caller.giveMoney(this)
    },
    inputSum: function(caller) {
        m(this, caller, "попросил меня указать желаемую сумму")
        caller.giveSum(this)
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
    checkCard: function(caller) {
        m(this, caller, "попросил меня проверить карту")
        caller.takeCardCheckResult(this)
    },
    checkPIN: function(caller) {
        m(this, caller, "попросил меня проверить ПИН-код")
        caller.takePINCheckResult(this)
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
    start: function(caller) {
        this.man = caller
        let p = L.r(1, 100)
        if (p <= 30) {
            caller.takeInfo(this, "Отсутствует связь с сервером!!!")
        } else {
            caller.insertCard(this)
        }
    },
    takeCard: function(caller) {
        m(this, caller, "попросил меня взять карту")
        this.checkCard(this)
        this.server.checkCard(this)
    },
    checkCard: function(caller) {
        m(this, caller, "попросил меня проверить карту")
    },
    takeCardCheckResult: function(caller) {
        m(this, caller, "попросил меня получить результат проверки карты")
        this.man.inputPIN(this)
    },
    takePIN: function(caller) {
        m(this, caller, "попросил меня принять ПИН-код")
        this.server.checkPIN(this)
    },
    takePINCheckResult: function(caller) {
        m(this, caller, "попросил меня получить результат проверки ПИН-кода")
        this.man.chooseOperation(this)
    },
    giveMoney: function(caller) {
        m(this, caller, "попросил меня выдать деньги")
        caller.inputSum(this)
    },
    giveSum: function(caller) {
        m(this, caller, "попросил меня выдать указанную сумму")
        this.checkSum(this)
        this.server.checkSum(this)
    },
    checkSum: function(caller) {
        m(this, caller, "попросил меня проверить наличие указанной суммы")
    },
    takeSumCheckResult: function(caller) {
        m(this, caller, "попросил меня получить результат проверки указанной суммы")
        this.man.takeMoney(this)
        this.printCheck(this)
        this.man.takeCard(this)
    },
    printCheck: function(caller) {
        m(this, caller, "попросил меня распечатать чек")
        this.man.takeCheck(this)
    }
}

//ЗАПУСК
L.b("<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>")
ATM.start(man)