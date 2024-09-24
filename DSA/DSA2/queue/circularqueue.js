class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.items[this.rear] = value
            this.currentLength++

            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()) return undefined;
        const item = this.items[this.front]
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength--;
        if(this.isEmpty()){
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek(){
        if(this.isEmpty()) return undefined;
        console.log(this.items[this.front])
    }

    print(){
        if(this.isEmpty()){
            console.log("Queue is Empty.");
        }
        let i;
        let str = '';
        for(i = this.front; i !== this.rear; i = (i+1) % this.capacity){
            str += this.items[i] + ' '
        }
        str += this.items[i]
        console.log(str);            
    }
}

const cq = new circularQueue(5);

console.log(cq.isEmpty())

cq.enqueue(50)
cq.enqueue(55)
cq.enqueue(65)
cq.enqueue(75)
cq.enqueue(85)

cq.peek()

cq.dequeue()

cq.peek()

cq.print()

cq.enqueue(8)

console.log(cq.isFull())

cq.print()