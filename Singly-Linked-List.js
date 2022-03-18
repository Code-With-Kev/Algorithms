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

    // -------------------------------------------------- PUSH METHOD ---------------------------------------------------
    
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

    // ------------------------------------------------- POP METHOD ------------------------------------------------------
    
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
    // --------------------------------------- POP METHOD /W EDGE CASE --------------------------------------------------

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
            this.tail = null;
        }
        return poppedNode.val
    }
    // ------------------------------------------- SHIFT METHOD ---------------------------------------------------------
    
    //PSEUDOCODE
    //create variable to store head value
    // set head.next as head
    
    shift(){
        if(!this.head) return null
        
        let shiftedNode = this.head
        this.head = this.head.next;
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return shiftedNode.val
    }

    // ------------------------------------------- UNSHIFT METHOD ---------------------------------------------------------
    
    //PSEUDOCODE
    //pass in a value
    //create a node inputted with that value
    //set this.head equal to this.head.next
    //set the new value as this.head

    unshift(val){
        let addedNode = new Node(val);
        if(!this.head){
            this.head = addedNode;
            this.tail = this.head;
            return
        }
        addedNode.next = this.head
        this.head = addedNode
        this.length++
        return this;
    }
        // ------------------------------------------- GET METHOD ---------------------------------------------------------

        //GET PSUEDOCODE
        //  Create function that accepts an index
        //  Create a counter varable
        //  Create a loop that increments the count each time
        // When count equals integer, return that node's value
        get(index){
            if(index < 0 || index >= this.length){
                return null
            }
            let count = 0;
            let getNode = this.head;
            while(count !== index){
                getNode = getNode.next
                count++
            }
            return getNode
        }
        // ------------------------------------------- SET METHOD ---------------------------------------------------------
        //  SET PSUEDOCODE (update value)
        //  Create function that accepts an index and a value
        //  Use get function to find node
        //  If node doesnt exist, return null
        set(index, val){
            if(!this.get(index)){
                return false
            }
            let current = this.get(index)
            current.val = val
            return true
        }
        // ------------------------------------------- INSERT METHOD ---------------------------------------------------------

        //  INSERT PSUEDOCODE 
        //  create function that takes in a index and a value
        //  create a node with an input of the value
        //  create two nodes that will track each other 
        //  create a counter
        //  Edge Case: if there is no head, set head equal to new node and set tail equal to head
        //  while counter doesnt equal index, traverse the list 
        //  set newNode's next to the indexed node
        //  set the preCurrent's next to the new node
        insert(index, value){
            let counter = 0
            let newNode = new Node(value)
            let current = this.head
            let preCurrent = current
            if(!this.head){
                this.head = newNode
                this.tail = this.head
            }
            while(counter !== index){
                preCurrent = current
                current = current.next
                counter++
            }
            newNode.next = current;
            preCurrent.next = newNode
            this.length++
            return true
        }
        //REFACTORED INSERT PSUEDOCODE
        //  If the index is less than 0 or greater than the length, return false
        //  If the index is the same as the length, push a new node to the end of the list
        //  If the index is 0, unshift a new node to the start of the list
        //  Otherwise, use the get method to access the node at the index - 1
        //  Set the next property on that node to be the new node
        //  Set the next property on the new node to be the previous next
        //  Increment length
        //  Return true

        insert2(index, val){
            let insertedNode = new Node(val)
            if(index < 0 || index > this.length){
                return false
            }
            if(index === this.length){
                this.push(insertedNode)
            }
            if(index === 0){
                this.unshift(insertedNode)
            }
            let preCurrent = this.get(index - 1)
            let current = this.get(index)
            preCurrent.next = insertedNode
            insertedNode.next = current
            this.length++
            return true
        }




}

    // ------------------------------------------- tESTING ---------------------------------------------------------

let list = new SinglyLinkedList()
list.push("Hi")
list.push("Byeeee")
list.push("Skyyy")

//console.log(list)

// console.log(list.pop())
// console.log(list.pop())

// console.log(list.pop2())
// console.log(list.pop2())
// console.log(list.pop2())
// console.log(list.pop2())

//console.log(list.shift())
//console.log(list.shift())


// list.unshift("Twerk")
// console.log(list)
// list.unshift("Brance")
// console.log(list)

console.log(list.insert2(-12, "bounce"))
console.log(list)

