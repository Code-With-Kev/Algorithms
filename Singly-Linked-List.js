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

    // ------------------------------------------------------- PUSH METHOD ---------------------------------------------------------------
    
    // PSEUDOCODE
    // pass value into function
    // create a new node inputted with the value
    // if no head/tail, set both equal to the node
    // otherwise, set the next property on the tail to be the new node and set the tail property on the list to be the newly created node

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
        return this
    }

    // ------------------------------------------------------- POP METHOD ---------------------------------------------------------------
    
    // PSEUDOCODE
    // if there are no nodes, set it to null
    // create a variable equal to the head that will traverse the list
    // while loop through the list until current.next = null
    // create variable to hold value of tail
    // set tail equal to null
    // set current as the new tail
    // decrement length
    // return the removed node's value

    pop(){
        if(!this.head) return null
        
        let current = this.head;
        while(current.next != this.tail){
            current = current.next;
        }
        let poppedNode = this.tail
        current.next = null;
        this.tail = current;
        this.length--
        return poppedNode.val
    }
    // ------------------------------------------------------- POP METHOD /W EDGE CASE ---------------------------------------------------------------

    //another pop that tracks 2 variables
    pop2(){
        if(!this.head) return null
        
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current
            current = current.next;
        }
        let poppedNode = current;
        newTail.next = null;
        this.tail = newTail
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return poppedNode.val
    }
}

let list = new SinglyLinkedList()
list.push("Hi")
list.push("Byeeee")
list.push("Skyyy")
//console.log(list)
// console.log(list.pop())
// console.log(list.pop())
console.log(list.pop2())
console.log(list.pop2())
console.log(list.pop2())
console.log(list.pop2())
