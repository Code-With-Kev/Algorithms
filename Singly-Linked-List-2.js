//What is a linked list?
        //A data structure that contains a head, tail and length property. Linked lists consist of nodes and each node has a value and a pointer to another node or null. 

        //         22 -> 2 -> 77 -> 6 -> 43 ->  76 -> 89
        // if you wanted to get 43:
        // if (empty){
        //     return NOT_FOUND
        // }
        // index = 0,
        // temp = head;
        // while (temp.item != v){
        //     index++, temp = temp.next
        //     if (temp == null){
        //         return NOT_FOUND
        //     }
        // }
        // return index;
        
// piece of data -val
// reference to next node - next

class Node{
    constructor(val){
        this.val=val;
        this.next = null; // how you initialize. Cause at the beginnning, nothing comes after it
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //PUSHING PSEUDOCODE
    // This function should accept a value
    // Create a new node using the value passed in
    // If there is no head property on the list (empty), set the head and tail to be the newly creeated node
    // If not empty, set the next property on the tail to be a new node and set the tail property on the list to be the newly created node
            push(val){
                let newNode = new Node(val);
                if(!this.head){
                    this.head = newNode;
                    this.tail = newNode; 
                } else {
                    this.tail.next = newNode;
                    this.tail = newNode;
                }
                this.length++;
                return this;
            }
    // POPPING PSEUDOCODE
    // If there are no nodes on the list, return undefined
    // Loop through the list until you reach the tail
    // Create a temp variable to keep track of what the last item was
    // Set the next property of the second to last node to be null
    // Set the tail to be the second to the last node
    // Decrement length 
    // Return the value of the node removed
            pop(){
                if(this.length === 0) return undefined;
                let lastNode = this.head;
                let newTail = lastNode
                while(lastNode.next){
                    newTail = lastNode;
                    lastNode = lastNode.next;
                }
                this.tail = newTail;
                this.tail.next = null;
                this.length--;
                return lastNode;
            }
    //SHIFTING PSUEDOCODE
    // If there are no nodes, return undefined
    // Store the current head property in a variable
    // Set the head property to be the current head's next property
    // Decrement length by 1
    // Return the value of the node removed
            shift(){
                if(!this.head) return undefined;
    
                let currentHead = this.head;
                this.head = currentHead.next;
                this.length --;
                return currentHead
            }
    //UNSHIFTING PSUEDOCODE  (adding to beginning)
    // Function should accept a value
    // Create a new node using the value passed to the function
    // If no head, set head and tail to be newly created node
    // Otherwise set the newly created node's next property to be the current head proper of the list
    // Set the head property on the list to be that newly created node
    // increment length
    // Make sure to add an else statement so that the nodes don't keep referring to themselves
    // return linked list
            unshift(data){
                let newNode = new Node(data)
                if(!this.head){
                    this.head = newNode;
                    this.tail = this.head;
                }else{
                    newNode.next = this.head;
                    this.length++
                }
                return this
            }
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
            return this
        }
        //REFACTORED INSERT PSUEDOCODE
        






    }


let list = new SinglyLinkedList();

list.push("HELLO");
list.push("GOODBYE")
list.push("!")
// console.log(list);
//list.pop()
//list.shift()
//list.unshift("boom")
console.log(list.insert(1, "Bloop"))
console.log(list)
//POPPING - removing a node from the end of a linked list

