class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class doubleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    push(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size++
    }

    unShift(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++        
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        }
        let temp = this.tail
        this.tail = temp.prev
        temp.prev = null
        this.tail.next = null
        this.size--
    }

    shift(){
        if(this.isEmpty()) return undefined
        let temp = this.head
        this.head = temp.next
        temp.next = null
        this.head.prev = null
        this.size--
    }

    get(index){
        if(index < 0 || index >= this.size) return undefined
        let curr
        if(index < this.size / 2){
            curr = this.head
            for(let i = 0; i< index; i++){
                curr = curr.next
            }
        }else{
            curr = this.tail
            for(let i = this.size - 1; i > index; i--){
                curr = curr.prev
            }
        }
        return curr     
    }

    set(index,value){
        let temp = this.get(index)        
        if(temp){
            temp.value = value
            return true
        }
        return false
    }

    insert(index,value){
        if(index < 0 || index > this.size) return undefined
        if(index === 0) return this.unShift(value)
        if(index === this.size) return this.push(value)
        const newNode = new Node(value)
        let before = this.get(index - 1)
        let after = before.next
        before.next = newNode
        after.prev = newNode
        newNode.prev = before
        newNode.next = after
        this.size++
    }

    remove(index){
        if(index < 0 || index > this.size) return undefined
        if(index === 0) return this.shift()
        if(index === this.size - 1) return this.pop()
        let curr = this.get(index)
            curr.prev.next = curr.next
            curr.next.prev = curr.prev
            curr.next = null
            curr.prev = null
        }

    print(){
        if(this.isEmpty()){
            console.log('The list is empty');            
        }
        let curr = this.head
        let listValues = ''
        while(curr){
            listValues += `${curr.value}-`
            curr = curr.next
        }
        console.log(listValues);
    }
}

const list = new doubleLinkedList()

list.push(45)
list.unShift(34)
list.print()
list.pop()
list.push(90)
list.unShift(10)
list.print()
list.shift()
list.unShift(49)
list.push(67)
list.set(3,55)
list.print()
list.insert(0,11)
list.insert(6,111)
list.remove(3)
list.print()