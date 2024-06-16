import Graph from "../models/Graph.js";

let g = new Graph();

const vertexForm = document.getElementById('vertex-form');
const edgeForm = document.getElementById('edge-form');
const graphOutput = document.getElementById('graph-output');
const bfsButton = document.getElementById('bfs-button');
const dfsButton = document.getElementById('dfs-button');
const resultsDiv = document.getElementById('results');

vertexForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const vertexName = document.getElementById('vertex-name').value;
    if (vertexName && g.addVertice(vertexName)) {
        alert(`Vertex ${vertexName} added successfully`);
        updateGraphOutput();
    } else {
        alert('Failed to add vertex. It might already exist.');
    }
});

edgeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const startVertex = document.getElementById('start-vertex').value;
    const endVertex = document.getElementById('end-vertex').value;
    const weight = parseInt(document.getElementById('weight').value);

    if (startVertex && endVertex && g.addConexion(startVertex, endVertex, weight)) {
        alert(`Edge from ${startVertex} to ${endVertex} with weight ${weight} added successfully`);
        updateGraphOutput();
    } else {
        alert('Failed to add edge. Please check the vertices.');
    }
});

bfsButton.addEventListener('click', () => {
    const startVertex = document.getElementById('start-vertex-traverse').value;
    resultsDiv.innerHTML = '';
    if (g.vertexExists(startVertex)) {
        g.bfs((n) => {
            resultsDiv.innerHTML += `<p>${n}</p>`;
        });
    } else {
        alert('Please enter a valid starting vertex.');
    }
});

dfsButton.addEventListener('click', () => {
    const startVertex = document.getElementById('start-vertex-traverse').value;
    resultsDiv.innerHTML = '';
    if (g.vertexExists(startVertex)) {
        g.dfs((n) => {
            resultsDiv.innerHTML += `<p>${n}</p>`;
        });
    } else {
        alert('Please enter a valid starting vertex.');
    }
});

function updateGraphOutput() {
    graphOutput.textContent = JSON.stringify({
        listaAdyacencia: g.getListaAdyacencia(),
        map: Array.from(g.getMap().entries()),
        maprev: Array.from(g.getMapRev().entries())
    }, null, 2);
}

updateGraphOutput();
