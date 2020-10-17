i = j = k = l = z = 0

let f = (z) => 
{
    // this.name = 'bbb'
    L.CL("Hello, " + this)
    L.CL(z)
}
f()
let a = {
    name: "a",
    ff: f
}
a.ff()

var b = {
    name: "b",
    fff: f
}
b.fff()

var c = { name: "c" }

f.call(c,7)

var obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    fff: () => {
        for (var key in this) {
            L.CL(key + " = " + this[key])
        }
    }
}
// obj1.fff()

var obj2 = {
    x: 10,
    y: 11,
    z: 12,
}
// obj1.fff(x)

f1 = () => {
    L.CL(f1.name)
}
f1()