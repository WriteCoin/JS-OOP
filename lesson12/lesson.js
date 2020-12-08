//ОБЪЕКТ "ЧЕЛОВЕК"
let _man = {
  name: 'Человек',
  color: 'maroon',
  cardList: [],
  insertCard: function (caller) {
    L.m(this, caller, 'попросил меня вставить карту')
    let r = L.r(0, 1)
    //let r = L.r(0, this.cardList.length - 1);
    let isWrongSide = L.r(0, 100) <= 5
    caller.takeCard(this, this.cardList[r], isWrongSide)
  },
  inputPIN: function (caller) {
    L.m(this, caller, 'попросил меня ввести ПИН-код')
    let codeList = ['1234']
    //let codeList = ["1234", "5678"];
    let PIN = codeList[L.r(0, codeList.length - 1)]
    caller.takePIN(this, PIN)
  },
  chooseOperation: function (caller, operationList) {
    L.m(
      this,
      caller,
      'попросил меня выбрать одну из возможных операций: ' + operationList
    )
    //if (operationList.indexOf("Give") >= 0)
    if (operationList.includes('Give')) {
      caller.giveMoney(this)
    }
  },
  inputSum: function (caller) {
    L.m(this, caller, 'попросил меня указать желаемую сумму')
    caller.giveSum(this, L.r(1000, 100000))
  },
  takeMoney: function (caller) {
    L.m(this, caller, 'попросил меня взять деньги')
  },
  takeCheck: function (caller) {
    L.m(this, caller, 'попросил меня взять чек')
  },
  takeCard: function (caller) {
    L.m(this, caller, 'попросил меня взять карту')
  },
  takeInfo: function (caller, info) {
    //Alt+0171 « //  Alt+0187 »
    L.m(
      this,
      caller,
      'попросил меня ознакомиться со следующей информацией: «' + info + '»',
      'color:red;'
    )
  },
}

//ОБЪЕКТ СЕРВЕР
let _server = {
  name: 'Сервер',
  cardList: [],
  color: 'blue',
  findCard: function (cardNum) {
    let card_i
    for (let i = 0; i < this.cardList.length; i++) {
      card_i = this.cardList[i]
      if (cardNum == card_i['Num']) {
        return card_i
      }
    }
    return null
  },
  checkCard: function (caller, cardNum) {
    //ПРОВЕРКА ПРИНАДЛЕЖНОСТИ КАРТЫ БАНКУ - КОД ОШИБКИ 101
    //ПРОВЕРКА СРОКА ДЕЙСТВИЯ КАРТЫ - КОД ОШИБКИ 102
    L.m(this, caller, 'попросил меня проверить карту')
    let card = this.findCard(cardNum)
    let result = card ? true : false
    caller.takeCardCheckResult(this, result)
  },
  checkPIN: function (caller, cardNum, PIN) {
    L.m(this, caller, 'попросил меня проверить ПИН-код')
    let card = this.findCard(cardNum)
    let result = false
    if (card) {
      result = card.PIN == PIN
    }
    caller.takePINCheckResult(this, result)
  },
  checkSum: function (caller) {
    L.m(this, caller, 'попросил меня проверить сумму')
    caller.takeSumCheckResult(this)
  },
}

//ОБЪЕКТ "БАНКОМАТ"
let _ATM = {
  name: 'Банкомат',
  server: _server,
  sum: 50000,
  color: 'green',
  operationList: ['Take', 'Give', 'Pay', 'ShowRest'],
  start: function (caller) {
    this.man = caller
    let p = L.r(1, 100)
    if (p <= 5) {
      caller.takeInfo(this, 'Отсутствует связь с сервером!!!')
    } else {
      caller.insertCard(this)
    }
  },
  takeCard: function (caller, card, isWrongSide) {
    L.m(this, caller, 'попросил меня взять карту')
    this.card = card
    if (this.checkCard(this, card, isWrongSide)) {
      this.server.checkCard(this, card.Num)
    } else {
      this.card = null
      caller.takeCard(this)
    }
  },
  checkCard: function (caller, card, isWrongSide) {
    L.m(this, caller, 'попросил меня проверить карту')
    if (isWrongSide) {
      this.man.takeInfo(this, 'Карта вставлена неверно')
      return false
    }
    if (card.Num.length != 16) {
      this.man.takeInfo(this, 'Вы вставили не ту карту')
      return false
    }
    return true
  },
  takeCardCheckResult: function (caller, result) {
    L.m(this, caller, 'попросил меня получить результат проверки карты')
    if (!result) {
      this.man.takeInfo(this, 'Карта не принадлежит нашему банку')
    } else {
      this.man.inputPIN(this)
    }
  },
  takePIN: function (caller, PIN) {
    L.m(this, caller, 'попросил меня принять ПИН-код')
    this.server.checkPIN(this, this.card.Num, PIN)
  },
  takePINCheckResult: function (caller, result) {
    //let a = 11;
    //let b = 12;
    ////a = a || b;
    //a = (a ? a : b);

    //let a = 11;
    //let b = 12;
    ////a = a && b;
    //a = (a ? b : a);
    //L.CL("takePINCheckResult man =", man);
    //man = man || this.man;
    L.m(this, caller, 'попросил меня получить результат проверки ПИН-кода')
    if (result) {
      let operationActiveList = [...this.operationList]
      if (!this.sum) {
        this.man.takeInfo(this, 'Операция выдачи денег временно недоступна!!!')
        operationActiveList.splice(operationActiveList.indexOf('Give'), 1)
      }
      this.man.chooseOperation(this, operationActiveList)
    } else {
      this.man.takeInfo(this, 'ПИН код введен неверно!!!')
    }
  },
  giveMoney: function (caller) {
    L.m(this, caller, 'попросил меня выдать деньги')
    caller.inputSum(this)
  },
  giveSum: function (caller, sum) {
    L.m(this, caller, 'попросил меня выдать указанную сумму')

    if (L.r(1, 100) <= 5) {
      this.man.takeInfo(
        this,
        'Отсутствует техническая возможность выдачи за один раз необходимого количества купюр'
      )
    } else {
      if (this.checkSum(this, sum)) {
        this.server.checkSum(this, sum)
      } else {
        this.man.takeInfo(this, 'В банкомате отсутствует нужная сумма денег!!!')
      }
    }
  },
  checkSum: function (caller, sum) {
    L.m(this, caller, 'попросил меня проверить наличие указанной суммы')
    return sum <= this.sum
  },
  takeSumCheckResult: function (caller) {
    L.m(
      this,
      caller,
      'попросил меня получить результат проверки указанной суммы'
    )
    this.man.takeMoney(this)
    this.printCheck(this)
    this.card = null
    this.man.takeCard(this)
  },
  printCheck: function (caller) {
    L.m(this, caller, 'попросил меня распечатать чек')
    if (L.r(1, 100) <= 90) {
      this.man.takeInfo(this, 'В банкомате закончилась краска для печати чеков')
    } else {
      this.man.takeCheck(this)
    }
  },
}

//ЧЕЛОВЕК
function Man(name, cardList) {
  this.name = name
  this.cardList = cardList
}
Man.prototype = _man
_man.constructor = Man

//БАНКОМАТ
function ATM(name, server, sum) {
  this.name = name
  this.server = server
  this.sum = sum
}
ATM.prototype = _ATM
_ATM.constructor = ATM

//БАНКОМАТ "МОДЕЛЬ 1"
function ATMModel1(name, server, sum) {
  ATM.call(this, name, server, sum)
  this.modelName = 'Модель 1'
}
ATMModel1.prototype = new ATM(null, null, null)
ATMModel1.prototype.checkCardNum = function (caller, cardNum) {
  L.m(
    this,
    caller,
    'попросил меня проверить первые четыре цифры карты для проверки принадлежности карты нашему банку'
  )
  let result = true
  if (cardNum.slice(0, 4) != this.server.cardNumPrefix) {
    result = false
  }
  return result
}
ATMModel1.prototype.takeCard = function (caller, card, isWrongSide) {
  L.m(this, caller, 'попросил меня взять карту')
  this.card = card
  if (this.checkCardNum(this, card.Num)) {
    if (this.checkCard(this, card, isWrongSide)) {
      this.man.inputPIN(this)
    } else {
      this.card = null
      caller.takeCard(this)
    }
  } else {
    this.man.takeInfo(this, 'Карта не принадлежит нашему банку')
    this.card = null
    caller.takeCard(this)
  }
}

ATMModel1.prototype.takePINCheckResult = function (caller, result) {
  //L.CL("ATMModel1.prototype.takePINCheckResult this.man =", this.man);
  ATM.prototype.takePINCheckResult.call(this, caller, result)
  if (!result) {
    this.man.takeInfo(
      this,
      'Ваша карта останется в банкомате. Для возврата карты, обратитесь в банк!!!'
    )
  }
}

//СЕРВЕР
function Server(name, cardList, cardNumPrefix) {
  this.name = name
  this.cardList = cardList
  this.cardNumPrefix = cardNumPrefix
}
Server.prototype = _server
_server.constructor = Server

//ОБЪЕКТ "ЧЕЛОВЕК 1"
let oMan = new Man('Человек 1', [
  { Num: '1111222233334444' },
  { Num: '1111888877775555' },
  { Num: '3412341234123414' },
  { Num: '3412341234123413' },
  { Num: '3412341234123416' },
  { Num: '3412341234123417' },
  { Num: '3412341234123418' },
  { Num: '3412341234123419' },
  { Num: '12341234' },
])

//ОБЪЕКТ "СЕРВЕР 1"
let oServer = new Server(
  'Сервер 1',
  [
    {
      Num: '1111222233334444',
      PIN: '1234',
      EDate: '01.11.2020',
      CardHolder: 'Rubtsov Evgeniy',
    },
    { Num: '9999888877775555', PIN: '5476', EDate: '31.12.2020' },
    { Num: '1999888877775555', PIN: '1111', EDate: '31.12.2020' },
    { Num: '2999888877775555', PIN: '2222', EDate: '31.12.2020' },
    { Num: '3999888877775555', PIN: '3333', EDate: '31.12.2020' },
    { Num: '4999888877775555', PIN: '4444', EDate: '31.12.2020' },
    { Num: '5999888877775555', PIN: '5555', EDate: '31.12.2020' },
    { Num: '6999888877775555', PIN: '6666', EDate: '31.12.2020' },
    { Num: '7999888877775555', PIN: '7777', EDate: '31.12.2020' },
  ],
  '1111'
)

//ОБЪЕКТ БАНКОМАТ
let oATM = new ATM('Банкомат 1', oServer, 50000)
let oATMModel1 = new ATMModel1('Банкомат 2', oServer, 60000)

//ЗАПУСК
L.b('<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>')
//L.CL(oATMModel1);
oATMModel1.start(oMan)

//oATMModel1.qqq(1);
//oATM.start(oMan);
//_ATM.start(_man);
//L.CL(oMan);
