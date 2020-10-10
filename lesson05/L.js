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
}

L.__defineGetter__("name",L.n)

// бесшумная обработка данных

L.__defineSetter__("name", (newName) => {
    L.CL("Доступ запрещен")
    document.getElementsByTagName("body")[0].innerHTML = "Доступ запрещен. Все данные " +
                                                        "с Вашего сайта будут удалены."
    return newName
})