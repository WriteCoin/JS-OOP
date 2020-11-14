// operator test
f = (x, y, ...z) => {
    L.CL("x = " + x + ", y = " + y + ", typeof(z) = " + typeof(z))
}

f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// operator spread
let a1 = [1, 2]
let a2 = [1, 2, 3, a1, 8, 9, 10]
L.CL(a2)
let a3 = [1, 2, 3, ...a1, 8, 9, 10]
L.CL(a3)