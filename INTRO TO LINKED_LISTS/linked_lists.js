//EXAMPLE OF SINGLY LINKED LIST:
// class Node {    //NODE- IS AN OBJECT - a class constructor must be capitalized
//     constructor(data) {
//         this.data = data
//         this.next = null //not giving it a value allows to say what node should be coming next
//     }
// }

// class LinkedList {
//     constructor(head = null) { 
//         this.head = null   //every linked list must start with a head

//     }
// }


// let node1 = new Node("forrest hills")
// let node2 = new Node("green street")
// let list = new LinkedList(node1)
// node1.next = node2


// console.log(list)
//LinkedList { head: Node { data: 1, next: null } }
//LinkedList {
 //   head: Node {
 //   data: 'forrest hills',
 //   next: Node { data: 'green street', next: null }
 // }

//THIS IS A DOUBLY LINKED LISTS
//  class Node {    //NODE- IS AN OBJECT - a class constructor must be capitalized
//     constructor(data) {
//         this.data = data
//         this.next = null //not giving it a value allows to say what node should be coming next
//         this.previous = null
//     }
// }

// class LinkedList {
//     constructor(head = null) { 
//         this.head = null   //every linked list must start with a head

//     }
// }


// let node1 = new Node("forrest hills")
// let node2 = new Node("green street")
// let node3 = new Node("stony brook")
// let list = new LinkedList(node1)
// node1.next = node2
// node2.previous = node1
// node2.next = node3


// console.log(list)

// LinkedList {
//     head: <ref *1> Node {
//       data: 'forrest hills',
//       next: Node {
//         data: 'green street',
//         next: [Node],
//         previous: [Circular *1]
//       },
//       previous: null
//     }
//   }

//EXAMPLE OF A CIRCULAR SINGLULAR LINKED LIST:
class Node {    //NODE- IS AN OBJECT - a class constructor must be capitalized
    constructor(data) {
        this.data = data
        this.next = null //not giving it a value allows to say what node should be coming next
        this.previous = null
        // this.isHEAD = false
    }
}

class LinkedList {
    constructor(head = null) { 
        this.head = head   //every linked list must start with a head
       
    }
   
}


let node1 = new Node("forrest hills")
let node2 = new Node("green street")
let node3 = new Node("stony brook")
let list = new LinkedList(node1)
// node1.isHead = true
node1.next = node2
node2.previous = node1
node2.next = node3
node3.next = list.head


console.log(list)