//A FUNCTION IS THERE TO EXECUTE CODE, BUT DATA STRUCTURES ARE OBJECTS
class LinkedList {       //AN ELEMENT IN A LINKED LIST IS CALLED A NODE- 
    constructor() {         //CONSTRUCTOR SHOULD BE FIRST BECAUSE IT IS THE FIRST CODE THAT IS EXECUTED
        this.head = null;     //FIRST NODE-HEAD AND
        this.tail = null;     // LAST NODE - TAIL
    }     
    append(value) {
        const newNode = {value: value, next: null}
        if(this.tail) {
            this.tail.next = newNode
        }
        this.tail.next = newNode
        if(this.head) {
            this.head = newNode
        }   
    }
    toArray() {
        const elements = []

        let curNode = this.tail
        while(curNode){
            
        }
    }
}

const linkedList = new LinkedList()