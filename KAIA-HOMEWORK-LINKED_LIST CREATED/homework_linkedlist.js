// Homework: In a js file called linked_list.js, build a linked list and node class with out reference. Then, add 3 nodes to that linked list using a push class method.
//LINKLIST WAS USED PRIOR TO ARRAYS
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    
push(data){ 
    let node = new Node(data)
    let current
    if(this.head === null) {
        this.head = node
    } else {
        current.next = this.head

        while(current.next){ 
            current = current.next
        
        current.next = node
        }
    }
    length++;
    return this;
}
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let list = new LinkedList(node1)

list.push(node1)
list.push(node2)
list.push(node3)
console.log(list)



reverse() {
    let current = this.head
    let previous = null
    let next = head.next
    while(current != null) {
        current.next = previous
        previous = current
        current = next
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
