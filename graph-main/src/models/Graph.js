import LinkedList from "./LinkedList/LinkedList.js";

export default class Graph {
    #listaAdyacencia
    #map
    #maprev

    constructor() {
        this.#map = new Map();
        this.#listaAdyacencia = [];
        this.#maprev = new Map();
    }

    addVertice(key) {
        if (this.#map.has(key)) {
            console.log(key + " ya existe");
            return false;
        } else {
            let lista = new LinkedList();
            lista.addList(key);
            this.#listaAdyacencia.push(lista);
            this.#map.set(key, this.#listaAdyacencia.length - 1);
            this.#maprev.set(this.#listaAdyacencia.length - 1, key);
            console.log(this.#listaAdyacencia[this.#listaAdyacencia.length - 1]);
            return true;
        }
    }

    addVertices(...vertices) {
        let lista;
        for (let value of vertices) {
            lista = new LinkedList();
            lista.addList(value);
            this.#listaAdyacencia.push(lista);
            this.#map.set(value, this.#listaAdyacencia.length - 1);
            this.#maprev.set(this.#listaAdyacencia.length - 1, value);
            console.log(this.#listaAdyacencia[this.#listaAdyacencia.length - 1]);
        }
    }

    addConexion(start, end, weight = 1) {
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].addList(end, weight);
            console.log("Conexión añadida");
            return true;
        } else {
            console.log("Error al añadir conexión");
            return false;
        }
    }

    bfs(callback) {
        let queue = [];
        let visited = new Array(this.#listaAdyacencia.length).fill(false);

        queue.push(this.#maprev.get(0));

        while (queue.length > 0) {
            let val = queue.shift();
            callback(val);
            visited[this.#map.get(val)] = true;
            this.#listaAdyacencia[this.#map.get(val)].run((data) => {
                if (!visited[this.#map.get(data)]) {
                    queue.push(data);
                }
            });
        }
    }

    dfs(callback) {
        let stack = [];
        let visited = new Array(this.#listaAdyacencia.length).fill(false);

        stack.push(this.#maprev.get(0));

        while (stack.length > 0) {
            let val = stack.pop();
            callback(val);
            visited[this.#map.get(val)] = true;
            this.#listaAdyacencia[this.#map.get(val)].run((data) => {
                if (!visited[this.#map.get(data)]) {
                    stack.push(data);
                }
            });
        }
    }

    vertexExists(vertex) {
        return this.#map.has(vertex);
    }

    getMap() {
        return this.#map;
    }

    getMapRev() {
        return this.#maprev;
    }

    getListaAdyacencia() {
        return this.#listaAdyacencia;
    }
}
