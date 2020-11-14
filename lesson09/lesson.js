// let c = {
//     next: function next(){
//         this.i++
//         return this.i
//     }
// }

// function Counter(){
//     this.i = 0
// }

// Counter.prototype = c
// c.constructor = Counter

// let propertyName = Symbol("Название переменной для хранения счетчика")
let propertyName = Symbol("Title of variable for storage counter")

L.CL(propertyName)

function Counter(){
    // this.i = 0
    this[propertyName] = 0
    // this.__proto__.i = 0
    this.__proto__[propertyName] = 0
}

Counter.prototype.next = function next(){
    // this.i++
    // this.__proto__.i++
    // return this.i
    this[propertyName]++
    this.__proto__[propertyName]++
    return this[propertyName]
}

// (((x,y) => {
//     L.CL(x+y)
//     return x+y
// })(1,2))

let counter1 = new Counter()
let counter2 = new Counter()
L.CL(counter1.next())
L.CL(counter1.next())
L.CL(counter1.next())
L.CL(counter2.next())
L.CL(counter2.next())
L.CL(counter1.__proto__.i)
L.CL(counter2.__proto__.i)
counter1.i = -100
counter2.i = 999
counter1.__proto__.i = 777
L.CL(counter1.i)
L.CL(counter2.i)
L.CL(counter2.__proto__.i)

L.CL(counter1.next())
L.CL(counter2.next())