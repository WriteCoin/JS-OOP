// let nodeTest = document.getElementById("test")

// L.CL(nodeTest)

let nodeTest1 = document.getElementById("test1")
L.CL(nodeTest1)

let nodeDivList = document.getElementsByTagName("div")
L.CL(nodeDivList)

let nodeClassList = document.getElementsByClassName("class1 class2")
L.CL(nodeClassList)

let nodeList1 = document.querySelectorAll(".class1 .class2")
L.CL(nodeList1)

let nodeList2 = document.querySelectorAll(".class1 p.class2")
L.CL(nodeList2)

let nodeList3 = document.querySelector("div")
L.CL(nodeList3)

let nodeList = document.querySelectorAll(".class1, .class2")
L.CL(nodeList)

let nodeTest12 = document.getElementById("test1")
L.CL(nodeTest12)
nodeTest12.innerHTML = "Hello,<br>world!!!"