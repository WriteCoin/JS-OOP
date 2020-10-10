function part1() {
    function fact(n, isDebug) {
        if (isDebug) console.group("Вызов функции f(" + n + "): ")
        let b = new Date()
        fact.cache = fact.cache || {}
        let factorial
        if (fact.cache[n]) {
            factorial = fact.cache[n]
            if (isDebug) console.log(`Из кэша: ${fact.cache}`)
        }
        else {
            factorial = 1
            for (let i = 1; i <= n; i++) {
                factorial *= i
            }
            fact.cache[n] = factorial
            if (isDebug) console.log(`Расчет: ${fact.cache}`)
        }
        let e = new Date()
        fact.time = e.valueOf() - b.valueOf()
        if (isDebug) {
            console.log(`Время: ${fact.time}`)
            console.groupEnd()
        }
        return factorial
    }
    
    let f
    f = fact(150, true)
    f = fact(150, true) 
}
// part1()

function part2() {
    L.CGb("гроб")
    L.CL("Hello, world")
    L.CL("Good bye")
    L.CGe()
    L.CL(L.name)
    L.name = 'qqq'
    L.CL(L.name)
}
part2()

