// SLL take up less memory but DLL allow for more flexbility. Therefore, its almost always a tradeoff to use DLL

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // -------------------------------------------------- PUSH METHOD ---------------------------------------------------
    
}