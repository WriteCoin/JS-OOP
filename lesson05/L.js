// библиотека

var L =
{
    // name: "Function L.js",
    CL: function(str) {
        console.log(str)
        return str
    },
    CGb: function(str) {
        console.group(str)
    },
    CGe: function() {
        console.groupEnd()
    },
    n:function() { return 'Function L.js'},
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