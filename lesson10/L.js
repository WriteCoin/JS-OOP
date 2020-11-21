// IIFE - Immediate Invoke Function Expression
// (f(){})()

let L = (() => {
    let i = 0
    let isDebugMode = false
    let log = () => {
        // console.log("Счетчик: " + (++i))
        ++i
        if (isDebugMode) console.log("Счетчик: " + i)
    }
    let publicAPI = {
        CL: (str) => {
            log()
            console.log(str)
            return str
        },
        CGb: (str) => {
            log()
            console.group(str)
        },
        CGe: () => {
            log()
            console.groupEnd()
        },
        r: (a, b) => a + Math.round( (b - a) * Math.random() ),
        t: x => typeof(x),

        n: () => { return 'Library L.js'},
        version: "Version 1.02"
    }
    publicAPI.__defineGetter__("name", publicAPI.n)
    publicAPI.__defineSetter__("name", (newName) => {
        publicAPI.CL("Доступ запрещен")
        var elemBody = document.getElementsByTagName("body")[0]
        elemBody.innerHTML = "Доступ запрещен. Все данные с Вашего сайта будут удалены."
        elemBody.style.color = '#f00'
        elemBody.style.backgroundColor = "#000"
        elemBody.style.fontSize = "48px"
        return newName
    })
    publicAPI.__defineSetter__("version", publicAPI.__lookupSetter__("name"))
    Object.defineProperty(publicAPI, 'name', 
    {
        // value: "Library L.js",
        // writable: false,
        configurable: false,
        enumerable: false,
        set: publicAPI.__lookupSetter__('name'),
        get: publicAPI.__lookupGetter__('name') // accessors
    })
    Object.defineProperty(publicAPI, 'version',
    {
        configurable: false,
        enumerable: false,
        set: publicAPI.__lookupSetter__('version'),
        get: publicAPI.__lookupGetter__('version')
    })
    let publicAPI_child = Object.create(publicAPI, 
        {
            date: {
                value: '17.10.2020',
                writable: false,
                configurable: false,
            },
            autor: {
                value: 'группа М3О-235Б-19',
                writable: false,
                configurable: false
            }
        })
    publicAPI_child.pl = (() => {
        for (key in this) {
            L.CL(this[key])
            L.CL(key + ' = ' + this[key])
        }
    }).bind(publicAPI_child)

    // Новый класс: массив строк
    let _str = {
        valueOf: function() {
            let index = publicAPI_child.r(0, this.valueList.length - 1)
            return this.valueList[index]
        },
        chanceOf: function() {
            return (1 / this.valueList.length)
        }
    }
    function Str(x) {
        this.valueList = x

    }
    Str.prototype = _str
    _str.constructor = Str
    publicAPI_child.Str = Str

    //Стразы
    let _phrase = {
        valueOf: function() {
            let result = ''
            for (let i = 0; i < this.wordList.length; i++) {
                result += this.wordList[i].valueOf()
            }
            return result
        },
        chanceOf: function() {
            let result = new Array(this.wordList.length).map((v) => this.wordList[v].chanceOf())
        }
    }
    // spread
    function Phrase(...x) {
        this.wordList = x.map((v) => new Str(v))
    }
    Phrase.prototype = _phrase
    _phrase.constructor = Phrase
    publicAPI_child.Phrase = Phrase

    publicAPI_child.b = (txt) => {
        let elem = document.getElementsByTagName("body")[0]
        elem.innerHTML += txt
        elem.style.fontSize = "40px"
    }

    let propertyName = Symbol("Title of variable for storage counter")
    publicAPI_child.Counter = function() {
        this[propertyName] = 0
        this.__proto__[propertyName] = 0
    }
    publicAPI_child.Counter.prototype.next = function() {
        this[propertyName] = 0
        this.__proto__[propertyName]++
        return this[propertyName]
    }

    publicAPI_child.pl.description = "Выводит список всех свойств библиотеки L.js"
    return publicAPI_child
})()
