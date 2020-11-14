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

function Counter(){
    this.i = 0
}

Counter.prototype.next = function next(){
    this.i++
    return this.i
}

(((x,y) => {
    L.CL(x+y)
    return x+y
})(1,2))

let counter1 = new Counter()
let counter2 = new Counter()
L.CL(counter1.next())
L.CL(counter1.next())
L.CL(counter1.next())
L.CL(counter2.next())
L.CL(counter2.next())