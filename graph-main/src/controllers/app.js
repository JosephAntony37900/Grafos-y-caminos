import Graph from "../models/Graph.js";

let g = new Graph();

const vertexForm = document.getElementById('vertex-form');
const edgeForm = document.getElementById('edge-form');
const graphOutput = document.getElementById('graph-output');

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

function updateGraphOutput() {
    graphOutput.textContent = JSON.stringify(g, replacer, 2);
}

function replacer(key, value) {
    if (key.startsWith('#')) {
        return undefined; // Remove private properties
    }
    return value;
}

updateGraphOutput();
