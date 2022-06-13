class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}
let reverseList = (head) => {
    let current = head
    let previous = null
    let next = head.next
    while(current != null){
        next - current.next

        current.next = previous
        
        previous = current

        current = next
    }
    return previous

}
        
let n1 = new Node(1)
let n2 = new Node(2)
n1.nest = n2
let list = new LinkedList(n1)
let reversedList = reverseList(n1)
console.log(reversedList)

//n1 --> --> null [nothing] n2 --> null (WHAT WE HAVE)
//null <-- n1 < n2 (WHAT WE NEED)





















//DIFFERENCE IN THE TWO 
//ITERATIVE: DONE IN A FOR LOOP
//RECURSIVE: CALL THE FUNCTION AS A RETURN PARAMETER

function recursiveContains(array, value, index) {
    let count = index;
    if(count <= array.length) {
        if(array[count] === value) {
            console.log(true)
            return true
        } else {
            count ++
            recursiveContains(array, value, count)
        } 
    
    } else {
        console.log("must pass in valid array index")
    }
}

recursiveContains([1, 2, 3, 4, 5, 6, 7], 5, 0)

//ITERATIVE FUNCTION

function iterateContains(aray, value) {
    for(i=0; i <= array.length; i++) {
        if(array[i] === value) {
            return true
        }
    }
}

