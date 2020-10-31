let a = new String("42")
L.CL(L.t(L.CL(a)))

let b = 42
let c = String(b)
L.CL(L.t(L.CL(c)))

let a1 = {
    a1: 1,
    a2: 2
}
let a2 = new Object({
    a1: 1,
    a2: 2
})
L.CL(a1)
L.CL(a2)

let f = () => {
    let a1 = [1, 2]
    let a2 = new Array(1,2)
    L.CL(a1)
    L.CL(a2)
}

let f1 = (x,y) => x*y
let f2 = new Function("x,y","return x*y")
L.CL(f1)
L.CL(f2)


// КАК СОЗДАВАТЬ СОБСТВЕННЫЕ КЛАССЫ
// начинаем создавать 3D-принтерок
let _obj = {
    a1: 1,
    b: 2,
    c: 3
}
function F(x) {
    this.value = x
}
// взаимная любовь: ссылка друг на друга
F.prototype = _obj
_obj.constructor = F

let objF = new F(10)
L.CL(objF)
L.CL(objF.__proto__)

let str1 = new L.Str(["Привет", "Hello", "Ola", "Hallo"])
L.CL(str1.valueOf())

let phrase = new L.Phrase(
    ["Привет", "Hello"],
    [", "],
    ["Мир", "World"],
    ["!!!"]
)
L.CL(phrase.valueOf)

L.b('qqq')