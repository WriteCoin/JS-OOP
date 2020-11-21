m = (thisObj, caller, message) => {
    L.b("<p>" + thisObj.name.toUpperCase() + ": " + caller.name + " " + message + " .</p>")
}

// ОБЪЕКТ "ЧЕЛОВЕК"
let man = {
    name: "Человек",
    insertCard: function(caller) {
        L.b("<p>" + this.name.toUpperCase() + ": " + caller.name + " попросил меня вставить карту.</p>")
    },
    inputPIN: function(caller) {
        m(this, caller, "попросил меня ввести ПИН-код")
    },
    chooseOperation: function(caller) {
        m(this, caller, "попросил меня выбрать операцию")
    }
}

let ATM = {
    name: "Банкомат",
    start: function(caller) {
        caller.insertCard(this)
    },
    takeCard: function(caller) {
        m(this, caller, "попросил меня взять карту")
    }
}

let server = {
    name: "Сервер"
}

L.b("<h1>СНЯТИЕ ДЕНЕГ В БАНКОМАТЕ</h1>")
ATM.start(man)