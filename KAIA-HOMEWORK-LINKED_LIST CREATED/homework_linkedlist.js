// Homework: In a js file called linked_list.js, build a linked list and node class with out reference. Then, add 3 nodes to that linked list using a push class method.
//LINKLIST WAS USED PRIOR TO ARRAYS

class LinkedList {
   
    constructor(head = null) {
        this.head = head
    }
    
    push(data) { 
        let node = new Node(data)
        let current
        if(this.head == null) {
            this.head = node
        } else {
            current = this.head

            while(current.next){ 
                current = current.next
            
            current.next = node
            }
        }
    }
   
    reverseIterative(node) {
        let current = node
        let prev = null
        let next = null
    
        while(current != null){
            next - current.next
    
            current.next = prev
            
            prev = current
    
            current = next
        }
    
        node = prev
        return node
    
    }

}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


let list = new LinkedList()

list.push("Sherwood")
list.push("Main")
list.push("Taylor")
console.log(list)






