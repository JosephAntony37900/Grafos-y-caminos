import Graph from "../models/Graph.js";
const g = new Graph(); // Instancia de tu grafo

// Agregar vértices y conexiones (puedes modificar según tus necesidades)
g.addVertices("A", "B", "C", "D", "E", "F", "G", "H", "I");
g.addConexion("A", "B");
g.addConexion("A", "C");
g.addConexion("A", "D", 8);
g.addConexion("B", "E", 9);
g.addConexion("B", "F", 10);
g.addConexion("D", "F", 11);
g.addConexion("E", "G", 12);
g.addConexion("G", "H");
g.addConexion("G", "I");

// Función para realizar BFS y mostrar resultados en la interfaz
function performBFS() {
    const startVertex = document.getElementById('startVertex').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (startVertex && g.addVertice(startVertex)) {
        g.bfs((n) => {
            resultsDiv.innerHTML += `<p>${n}</p>`;
        });
    } else {
        alert('Please enter a valid starting vertex.');
    }
}

// Función para realizar DFS y mostrar resultados en la interfaz
function performDFS() {
    const startVertex = document.getElementById('startVertex').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Limpiar resultados anteriores

    if (startVertex && g.addVertice(startVertex)) {
        g.dfs((n) => {
            resultsDiv.innerHTML += `<p>${n}</p>`;
        });
    } else {
        alert('Please enter a valid starting vertex.');
    }
}

/*import Graph from "../models/Graph.mjs";

let g = new Graph()

g.addVertices("A","B","C","D","E","F","G", "H", "I")


g.addConexion("A","B",7)
g.addConexion("A","C",5)
g.addConexion("A","D",8)
g.addConexion("B","E",9)
g.addConexion("B","F",10)
g.addConexion("D","F",11)
g.addConexion("E","G",12)
g.addConexion("G","H",11)
g.addConexion("G","I",3)



export default g */

