class Node {
    #key
    #next
    #weight

    constructor(key,weight){
        this.#key=key;
        this.#next=null;
        this.#weight=weight;
    }
    
    getKey(){
        return this.#key;
    }

}

export default Node