// number string boolean
// Number String Boolean
// Object

// a = {}
// typeof(a)
// b = new Object()
// typeof(b)

// Array Date Function

// несколько способов создания массивов
arr_proc = () => {
    let a = []
    console.log(typeof(a))
    
    let b = [1, 2, 3]
    console.log(b)
    console.log(b.length)
    
    b.length = 10
    console.log(b.length)
    console.log(b)
    console.log(b[7])
    b[20] = 7
    console.log(b)
    
    // нумерация идет с 0
    
    b.length = 3
    console.log(b)
    b.push(7)
    console.log(b)
    b.pop()
    console.log(b)
    i = b.pop()
    console.log(i)
    console.log(b)
    let k
    k = b.push(9)
    // push возвращает новую длину массива
    console.log(k)
    k = b.pop()
    // pop возвращает удаленное значение
    console.log(k)
    
    b.push(7,3,8,5)
    console.log(b)
    
    b.unshift(11) // вставить элемент
    console.log(b)
    b.shift() // выкинуть первый элемент из массива
    console.log(b)
    
    b.unshift(7,3,8,5)
    console.log(b)
    
    let c = [1, 2, 3, 4]
    c.slice(1)
    console.log(c)
    c.concat(5)
    console.log(c)
    
    b.splice(1,1)
    console.log(b)
    b.length = 10
    console.log(b)
    
    b.splice(6, 5, -1)
    console.log(b)
    b.splice(4, 0, 3, 7, 9, 4, 4)
    console.log(b)
    
    b = [9, 8, 3, 22, 220, 4, 2, 0]
    b.sort()
    console.log(b)
    
    // function kkk(qqq) {
    //     qqq()
    // }
    
    b.sort(function(a,b){
        return a-b
    })
    console.log(b)
    
    b.reverse()
    console.log(b)

    const arr = [1, 2, 3, 4, 5]
    arr.concat(3)
    arr.concat([6,7,8])
    arr.slice(2)
    arr.slice(0,-2)
    [1,2,3].slice().sort()
}

// ДЗ - функция, на вход два параметра


// DATE
let d = new Date()
console.log(d)
console.log(d.valueOf())
console.log(d.getFullYear())
console.log(d.getYear())
console.log(d.getMonth())
console.log(d.getDay())

dd = new Date(20, 8, 27, 18, 23, 47, 11)
console.log(dd)
console.log(dd.getHours())
console.log(dd.getMinutes())
console.log(dd.getSeconds())
console.log(dd.getMilliseconds())
console.log(d.getDate())

d.setFullYear(2021)
console.log(d)

function fact(n) {
    let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    return factorial
}
f = fact(5)
console.log(f)
console.log(typeof(fact))

fact = (a) => { 
    let b = new Date()
    let c = (fact) => {
        if (a>1) fact.result = a*fact(a-1)
        else fact.result = 1
    }
    c(fact)
    let e = new Date()
    fact.time = e.valueOf() - b.valueOf()
    return fact.result
}
f = fact(5)
console.log(f)
console.log(typeof(fact))

let ff = fact
console.log(ff(5))

let a = [fact, ff]
console.log(a[0](5))    

let o = { fff: fact}
console.log(o.fff(5))

fact.description = "функция расчета факториала"
console.log(fact.description)

fact(100)
console.log(fact.result)
console.log(fact.time)

// изучить методы и свойства трех новых объектов