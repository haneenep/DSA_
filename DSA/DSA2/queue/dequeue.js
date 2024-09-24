class Queue{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0
    }

    getSize(){
        return this.items.length;
    }

    addValue(value){
        this.items.unshift(value);
    }

    dequeue(){
        return this.items.shift();
    }

    display(){
        if(this.isEmpty()){
            console.log("Queue is Empty .. ");            
        }
        console.log(this.items.toString());
    }
}

const dq = new Queue()

console.log(dq.getSize())

console.log(dq.isEmpty())

dq.addValue(60)
dq.addValue(70)
dq.addValue(80)

dq.display()

dq.dequeue()

console.log(dq.getSize())

console.log(dq.isEmpty())

dq.display()

