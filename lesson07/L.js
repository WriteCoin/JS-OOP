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
            // r: (a, b) => a + Math.round( (b - a) * Math.random() )
        })
    publicAPI_child.pl = (() => {
        for (key in this) {
            L.CL(this[key])
            L.CL(key + ' = ' + this[key])
        }
    }).bind(publicAPI_child)
    publicAPI_child.pl.description = "Выводит список всех свойств библиотеки L.js"
    publicAPI_child.rfg = (a, b) => { 
        return (x = a, y = b) => {
            if (a > b) {
                console.error("Ошибочка уыуофдыь з-мч числа: " + a + ', ' + b)
                return undefined
            } else return x + Math.round( (y - x) * Math.random() )
        }
    }
    publicAPI_child.r = (a, b) => publicAPI_child.rfg(a, b)
    publicAPI_child.rfg.description = "Рандом чисел"
    return publicAPI_child
})()
