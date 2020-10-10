function f() {
    {
        a = 1;
        var b = 2;
        let c = 3;
        c = 13;
        const d = 4;
        d = 14;
        console.log(a, '\n', b, '\n', c, '\n', d);
    }
    //console.log(c);
    //console.log(d);
}
//console.log(a, '\n', b, '\n', c, '\n', d);
//f();
//console.log(a, '\n', b, '\n', c, '\n', d);

function f2() {
    // Primitives types: Number, String, Boolean
    let i = 5
    console.log(typeof(i))
    i = "5"
    console.log(typeof(i))
    i = true
    console.log(typeof(i))

    // undefined
    let j
    console.log(typeof(j))
    console.log(j)

    // Specific types: bigint, symbol
    j = Symbol("password")
    console.log(j)
    console.log(typeof(j))
    k = Symbol("password")
    console.log(j==k)

    // Null object
    j = null
    console.log(typeof(j))
    console.log(j)

    // Infinity
    j = 1/0
    console.log(typeof(j))
    console.log(j)
    j = -1/0
    console.log(typeof(j))
    console.log(j)
    j = Infinity - Infinity
    console.log(typeof(j))
    console.log(j)
    j = Infinity + Infinity
    console.log(typeof(j))
    console.log(j)

    // Not a Number
    j = console.log() + '5'
    console.log(typeof(j))
    console.log(j)
}
//f2()

function f3() {
    let s = new String('abc')
    console.log(typeof(s))
    console.log(s)
    console.log(s.length)
    console.log(s[2])
    console.log(s.toUpperCase())

    let p = "world"
    console.log(typeof(p))
    console.log(p.toUpperCase())
    console.log(p.toString())

    p = 'Moon'
    p = new String(p)
    console.log(typeof(p))
    p = p.toUpperCase()
    console.log(p)

    p = 'moon'
    //p = new String(p)
    p = p.toUpperCase()
    console.log(p)

    // ДЗ: посмотреть все методы объекта String
    s = new String("abcdefgh")
    console.log(typeof(s))

    f = function() { console.log("Hello, world!") }
    console.log(f.toString())
}
//f3()

function f4() {
    let i = new Number(5)
    console.log(i)
    console.log(i.toExponential())
    // Изучить ДОМ объект Number

    let b = new Boolean(true)
    console.log(b)
    console.log(b.valueOf())
}
//f4()

let person = {
    Name: 'Данила',
    lastName: 'Воронков',
    age: 20,
    fullName: function() {
        return this.Name + ' ' + this.lastName
    }
}
console.log(person.Name)
console.log(person.lastName)
console.log(person.age)
console.log(person.fullName())
