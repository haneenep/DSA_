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
            newNode.next = this.head
            this.head = newNode;
        }
        this.size++
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

q.print(5)