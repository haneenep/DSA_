class Node{
    constructor(value){
        this.value = value
        this.next = null
    }   
}

class queue{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    enqueue(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
        } else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = newNode
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()) return undefined;
        const curr = this.head
        this.head = curr.next;
        curr.next = null
        return curr;
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty.");
        }else{
            let curr = this.head
            while(curr){ 
                console.log(curr.value);            
                curr = curr.next
            }
        }
    }
}

const q = new queue()

q.enqueue(40)
q.enqueue(60)
q.enqueue(70)
q.enqueue(80)

q.print()

console.log("..............");


q.dequeue()
q.dequeue()

q.print()