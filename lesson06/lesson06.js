L.CL(L.name)
// delete L.name
// L.__defineGetter__( 'name', f => 'qqq' )
L.name = 'qqq'
L.CL(L.name)

L.version = "Версия"
delete L.version

L.CL(L.date)
L.date = 'qqq'
L.CL(L.date)

L.CL(L.autor)
L.autor = 'qqq'
L.CL(L.autor)