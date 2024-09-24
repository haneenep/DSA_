class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    getSize(){
        return this.rear;
    }

    enqueue(value){
        this.items[this.rear] = value;
        this.rear++
    }

    peek(){
        console.log(this.items[this.front])
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty ... ");            
        }else{
            console.log(this.items);
        }
    }
    
}

const q = new Queue();

console.log(q.isEmpty())

console.log(q.getSize())

q.display()


q.enqueue(11)
q.enqueue(22)
q.enqueue(33)

q.peek()

console.log(q.isEmpty())

console.log(q.getSize())

q.display()
