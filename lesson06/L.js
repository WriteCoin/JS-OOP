// IIFE - Immediate Invoke Function Expression
// (f(){})()

let L = (() => {
    let i = 0
    let log = () => {
        // console.log("Счетчик: " + (++i))
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
        version: "Версия 1.01"
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
        value: "Library L.js",
        writable: false,
        configurable: false,
        set: publicAPI.__lookupSetter__('name')
    })
    return publicAPI
})()
