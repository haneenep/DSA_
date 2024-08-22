class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    unShift(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    shift(){
        if(this.isEmpty()){
            return undefined
        }
        const curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--
    }

    push(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
        let curr = this.head
        while(curr.next){
            curr = curr.next
        }
        curr.next = newNode
    }
        this.size++
}

    pop(){
        if(this.isEmpty()){
            return undefined
        }
        let curr = this.head
        let prev = this.head
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        prev.next = null
        this.size--           
    }

    get(index){
        if(index < 0 || index >= this.size){
            return undefined
        }
        let curr = this.head
        for(let i = 0; i<index; i++){
            curr = curr.next
        }
        return curr
    }

    set(index,value){
        let curr = this.get(index)
        if(curr){
            curr.value = value
            return true
        }
        return false
    }

    insert(index,value){
        if(index < 0 || index > this.size) return undefined
        if(index === 0) return this.unShift(value)
        if(index === this.size) return this.push(value)
        let prev = this.get(index-1)
        let newNode = new Node(value)
        let temp = prev.next
        prev.next = newNode
        newNode.next = temp
        this.size++
    }

    convertToArray(){
        if(this.isEmpty()) return []
        let curr = this.head
        let arr = []
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        return arr
    }


    arrayToList(arr){
        this.head = null
        this.size = 0
        for(let value of arr){
            this.push(value)
        }
        return this
    }

    findingMiddle(){
        if(this.isEmpty()){
            return undefined
        }
        let fast = this.head
        let slow = this.head
        while( fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }


    deleteMiddle(){
        let fast = this.head
        let slow = this.head
        let prev = null
        while(fast.next && fast.next.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }

    remove(index){
        if(index < 0 || index > this.size) return undefined
        if(index === 0) return this.shift()
        if(index === this.size - 1) return this.pop()
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = temp.next
        this.size--
    }


    reverse(){
        let curr = this.head
        let next = null
        let prev = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');            
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

const list = new linkedList()

console.log(list.getSize());
list.unShift(56)
list.print()
list.unShift(44)
list.unShift(22)
list.unShift(30)
list.print()
list.shift()
list.push(60)
list.push(66)
list.print()
console.log(list.getSize());
console.log(list.get(4))
list.print()
list.set(2,100)
list.print()
list.insert(2,50)
list.insert(0,5)
list.insert(7,500)
list.print()
console.log(list.getSize());
list.remove(6)
list.print()
list.reverse()
console.log(list.findingMiddle())
list.deleteMiddle()
list.print()
console.log(list.getSize());
console.log(list.convertToArray())
console.log(list.arrayToList([5, 6, 7, 8, 8]));
list.print();
