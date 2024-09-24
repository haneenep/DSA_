class Queue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    isEmpty(){
        return this.rear - this.front == 0;
    }

    getSize(){
        return this.rear;
    }

    addValue(value){
        this.items[this.rear] = value;      
        this.rear++;
    }
    
    dequeue(){
        if(this.isEmpty()) return undefined;
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++     
        return item
    }

    peek(){
        return console.log(this.items[this.front]);
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty .");            
        }else{
            console.log(this.items);            
        }
    }
}

const dq = new Queue()

console.log(dq.isEmpty())

dq.addValue(30)
dq.addValue(40)
dq.addValue(50)

dq.peek()

dq.display()

console.log(dq.getSize())

dq.dequeue()
dq.dequeue()

dq.peek()

dq.display()
