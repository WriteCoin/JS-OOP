// alert(`Hello,
// World!!!`);

/*console.log("Hello, world");*/

/*var name = "Данила";
console.log("Hello, " + name + "!!!");
name = 27
console.log("Hello, " + name);*/

const name = "Данила"
const helloWorld = () => {
    const num = 45
    console.log("Hello, " + num + "!!!")
}
//helloWorld();
// (() => {
//     console.log("Анонимная функция")
//     document.getElementById("header1").innerHTML = "qqq"
// })()

// const sum = a => b => a + b
const sum = function(a, b) { 
    return a + b
}
const sum2 = function(a) { 
    return sum(2,a) 
}
console.log(sum2(1))

document.getElementById("header1").setAttribute("style", "color: red")

const header = document.getElementById("header1")

header.onclick = () => header.remove()

header.innerHTML = "Counter"

const buttonInc = document.createElement("button")

buttonInc.innerHTML = "+"

document.body.append(buttonInc)

const buttonDec = document.createElement("button")

buttonDec.innerHTML = "-"

document.body.append(buttonDec)

const label = document.createElement("label")

label.innerHTML = "0"

document.body.append(label)

let counter = 0

buttonInc.onclick = event => {
    label.innerHTML = ++counter
    console.log(event)
}
buttonDec.onclick = () => label.innerHTML = --counter

