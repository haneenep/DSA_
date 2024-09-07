class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
        this.length = 0
    }

    isEmpty(){
        return this.length === 0
    }

    push(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty");            
        }
        let curr = this.top
        let listvalues = ''
        while(curr){
            listvalues += `${curr.value}`
            curr = curr.next
        }
        console.log(listvalues);        
    }
}

const stacks = new stack()

stacks.push(33)
stacks.push(39)
stacks.push(40)