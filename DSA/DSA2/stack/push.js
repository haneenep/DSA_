class stack{
    constructor(){
        this.items = []
    }

    isEmpty(){
        return this.items.length === 0;
    }

    push(value){
        this.items.push(value)
    }

    getSize(){
        return this.items.length;
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    display(){
        if(this.isEmpty()){
            console.log("Stack is Empty.");            
        }else{
            console.log(this.items.toString());
        }
    }
}

const spush = new stack()

spush.push(50)
spush.push(60)
spush.push(70)

spush.display()

console.log(spush.peek())

spush.push(80)

spush.display()

console.log(spush.peek())