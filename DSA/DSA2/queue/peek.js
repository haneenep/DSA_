class Queue{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length;
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        if(this.isEmpty()) return undefined;
        this.items.shift();
    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[0]
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty .. ");            
        }
        console.log(this.items.toString());        
    }
}

const queue = new Queue()

console.log(queue.isEmpty())

console.log(queue.getSize())

queue.enqueue(90)
queue.enqueue(95)
queue.enqueue(99)
queue.enqueue(100)

queue.display()

console.log(queue.peek())

console.log(queue.isEmpty())

console.log(queue.getSize())

queue.dequeue()
queue.dequeue()

queue.display()

console.log(queue.isEmpty())

console.log(queue.getSize())

console.log(queue.peek())
