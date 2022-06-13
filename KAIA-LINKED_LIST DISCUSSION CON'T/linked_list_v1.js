//NO NEED TO WRITE THE WORD FUNCTION WITHIN A CLASS-JS KNOWS
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    push(data){
        let node = new Node(data)
        let current
        if(this.head === null) {
            this.head = node
        }else {
            current = this.head

            while(current.next) {
                current = current.next
            }
            current.next = node
            return
        }
    }
    
}

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

let list = new LinkedList(node1)
// let node1 = new Node(1)  REDUNDANT BECAUSE (node) IF
// let node2 = new Node(2)

list.push(node1)
list.push(node2)
