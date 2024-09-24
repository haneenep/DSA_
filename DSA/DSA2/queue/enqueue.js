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

    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty .. ");            
        }
        console.log(this.items.toString());        
    }
}

const q = new Queue()

console.log(q.isEmpty())

console.log(q.getSize())

q.enqueue(20)
q.enqueue(30)
q.enqueue(40)

q.print()

console.log(q.isEmpty())

console.log(q.getSize())

q.enqueue(50)

q.print()
