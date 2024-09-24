class stack{
    constructor(){
        this.items = [];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    getSize(){
        return this.items.length;
    }

    addValue(value){
        this.items.push(value)
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];      
    }

    display(){
        if(this.isEmpty()){
            console.log("Stack is Empty..");            
        }else{
            console.log(this.items.toString());            
        }
    }
}

const stacks = new stack()

stacks.addValue(110)
stacks.addValue(120)
stacks.addValue(130)
stacks.addValue(140)

console.log(stacks.getSize())
console.log(stacks.peek());

stacks.display()

stacks.pop()
stacks.pop()

console.log(stacks.peek());

stacks.display()

stacks.pop()

stacks.display()