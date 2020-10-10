// библиотека

var L =
{
    i: 0,
    log: () => {
        console.log("Счетчик: " + (++L.i))
    },
    // name: "Function L.js",
    CL: (str) => {
        L.log()
        console.log(str)
        return str
    },
    CGb: (str) => {
        L.log()
        console.group(str)
    },
    CGe: () => {
        L.log()
        console.groupEnd()
    },
    n: () => { return 'Function L.js'},
    version: "Версия 1.01"
}

L.__defineGetter__("name",L.n)

// бесшумная обработка данных

L.__defineSetter__("name", (newName) => {
    L.CL("Доступ запрещен")
    var elemBody = document.getElementsByTagName("body")[0]
    elemBody.innerHTML = "Доступ запрещен. Все данные с Вашего сайта будут удалены."
    elemBody.style.color = '#f00'
    elemBody.style.backgroundColor = "#000"
    elemBody.style.fontSize = "48px"
    return newName
})

L.__defineSetter__("version", L.__lookupSetter__("name"))