// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: () => {
//         for (key in this) {
//             L.CL(this[key])
//             key + ' = ' + this[key]
//         }
//     }
// }
// obj.f()

// obj.f.call(window)

// f1 = obj.f.bind(console)

// f1()

// f1.call(obj)
// L.pl.call(obj)


// Стрелочные функции / Arrow functions

let f = (n) => n * n // var f = function(n) { return n*n; }

// L.CL(f(5))

let ff = (a, b) => a + b
// L.CL(ff(10, 7))

let fff = (a, b, c) => {
    let d = a + b - c
    L.CL(d)
    return d
}
// fff(1, 2, 3)

let f1 = () => L.CL(this)
let obj1 = { f: f1 }
// f1()
// obj1.f()

// f1.call(obj1)

let f2 = f1.bind(obj1)
// f2()

// L.CL(Math.random()) // [0..1)

let r = (a,b) => {
    // let n = a + (b - a) * Math.random()
    let n = a + Math.round( (b - a) * Math.random() )
    return n
}
// L.CL(r(0,5))

for (let i=1; i<=10; i++) {
    L.CL(r(0,1))
}