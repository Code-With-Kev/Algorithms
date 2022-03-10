class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0;
    }

    // ----------------------------------------------------------------- PUSH METHOD ------------------------------------------------------------------------------
    
    // PSEUDOCODE
    // pass value into function
    // create a new node inputted with the value
    // if no head/tail, set both equal to the node
    // otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node

    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode
        }
        this.tail.next = newNode;
        this.tail = newNode
        length++

    }
}

let first = new Node("Hi");
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")

let list = new SinglyLinkedList()
list.push("Hi")
list.push("Byeeee")
console.log(list)