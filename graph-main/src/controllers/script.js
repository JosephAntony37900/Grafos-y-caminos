import g from "./dependencies.js";


if(g.addVertice("1"))
    console.log("Bien")
else
    console.log("Mal")
if(g.addVertice("2"))
    console.log("Bien")
else
    console.log("mal")

g.addConexion("1", "2")
g.addConexion("2","A")

g.bfs((n)=>{
    console.log(n)
})