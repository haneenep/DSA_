class Stack{
    constructor(){
        this.items = {};
        this.rear = 0;
    }

    isEmpty(){
        return this.rear === 0;
    }

    push(value){
        this.items[this.rear] = value
        this.rear++
    }

    pop(){
        const item = this.items[this.rear]
        this.rear--
        delete this.items[this.rear]
        return item;
    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.rear - 1];
    }

    display(){
        if(this.isEmpty()){
            console.log("List is Empty");            
        }else{
            console.log(this.items);            
        }
            
    }
}

const stacks = new Stack()

stacks.push(40)
stacks.push(50)
stacks.push(60)

stacks.display()

stacks.pop()

stacks.display()
