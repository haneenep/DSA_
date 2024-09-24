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

    push(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
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

sll.push(49)
sll.push(59)
sll.push(69)

sll.display()

sll.push(77)

console.log(sll.peek())

sll.display()

console.log(sll.peek())