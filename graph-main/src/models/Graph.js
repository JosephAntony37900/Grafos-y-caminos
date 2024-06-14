import LinkedList from "./LinkedList/LinkedList.js";

export default class Graph {
    #listaAdyacencia
    #map
    #maprev

    constructor() {
        this.#map= new Map();
        this.#listaAdyacencia= [];
        this.#maprev= new Map();
    }
    
    addVertice(key){
        const exist = key in this.#map;
        if(exist){
            console.log(key + "Si toy");
            return false;
        }
        else{
            let lista = new LinkedList()
            lista.addList(key)
            this.#listaAdyacencia.push(lista)
            this.#map.set(key, this.#listaAdyacencia.length-1)
            this.#maprev.set(this.#listaAdyacencia.length-1, key)
            console.log(this.#listaAdyacencia[this.#listaAdyacencia.length-1]);
            return true
        }
    }

    addVertices(...vertices) {
        let lista
        for (let value of vertices) {
            lista =new LinkedList();
            lista.addList(value)
            this.#listaAdyacencia.push(lista)
            this.#map.set(value,this.#listaAdyacencia.length-1)
            this.#maprev.set(this.#listaAdyacencia.length-1, value)
            console.log(this.#listaAdyacencia[this.#listaAdyacencia.length-1]);
        }
    }

    /* addV(value) {
        this.#listaAdyacencia.push([])
        this.#map.set(value,this.#listaAdyacencia.length-1)
    } */

    addConexion(start, end, weight=1){
        if (this.#map.has(start) && this.#map.has(end)) {
            this.#listaAdyacencia[this.#map.get(start)].addList(end, weight)
            console.log("esooo")
        }else{
            console.log("valio queso")
        }
    }
    
    bfs(callback){
        let queue = []
        let list = []

        for (let i=0; i<this.#listaAdyacencia.length;i++)
            list[i] = false

        queue.push(this.#maprev.get(0))
        
        while (queue.length > 0) {
            let val = queue.shift() //Sacamos el primer elemento de la cola
            callback(val) //Imprimimos el valor
            list[this.#map.get(val)] = true //Marcamos de visitado
            /*for (let i=0;i<this.#listaAdyacencia[this.#map.get(val)].length;i++) {
                if (this.#listaAdyacencia[this.#map.get(val)][i]){
                    if (!list[this.#map.get(key)] && !queue.includes(key)) 
                        queue.push(key) //Agregamos los vecinos a la cola
                }
            }*/
            this.#listaAdyacencia[this.#map.get(val)].run((data) => {
                if(!list[this.#map.get(data)]){
                    queue.push(data)
                }
           })
        }

    }

    dfs(callback){
        let stack = []
        let list = []

        for (let i=0; i<this.#listaAdyacencia.length;i++)
            list[i] = false

     stack.push(this.#maprev.get(0))
        
        while  (stack.length > 0) {
            let val = stack.pop() //Sacamos el primer elemento de la cola
            callback(val) //Imprimimos el valor
            list[this.#map.get(val)] = true //Marcamos de visitado
            /*for (let i=0;i<this.#listaAdyacencia[this.#map.get(val)].length;i++) {
                if (this.#listaAdyacencia[this.#map.get(val)][i]){
                    if (!list[this.#map.get(key)] &&  stack.includes(key)) 
                     stack.push(key) //Agregamos los vecinos a la cola
                }
            }*/
            this.#listaAdyacencia[this.#map.get(val)].run((data) => {
                if(!list[this.#map.get(data)]){
                 stack.push(data)
                }
           })
        }

    }

}