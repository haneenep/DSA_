class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    addValue(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        this.head = curr.next
        return curr.value
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.head.value
    }

    display(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
        }else{
            let curr = this.head
            let listvalues = ''
            while(curr){
                listvalues += `${curr.value}-`
                curr = curr.next
            }
            console.log(listvalues);
        }
    }
}

const sll = new stack()

console.log(sll.peek())

sll.addValue(49)
sll.addValue(59)
sll.addValue(69)

sll.display()

sll.addValue(77)

console.log(sll.peek())

sll.display()

sll.pop()

sll.display()
