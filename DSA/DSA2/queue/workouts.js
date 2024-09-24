// class queue{
//     constructor(){
//         this.items = [];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     enqueue(value){
//         this.items.push(value)
//     }

//     dequeue(){
//         if(this.isEmpty())undefined;
//         return this.items.shift();
//     }

//     peek(){
//         return this.items[0]
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("List is Empty");            
//         }else{
//             console.log(this.items.toString());            
//         }
//     }
// }

// const q = new queue()

// q.enqueue(50)
// q.enqueue(60)
// q.enqueue(70)
// q.enqueue(80)

// q.display()

// q.dequeue()
// q.dequeue()

// q.display()

// console.log(q.peek());


// with Object
// class queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0;
//         this.front = 0;
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear++
//     }

//     dequeue(){
//         if(this.isEmpty()) return undefined;
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     peeek(){
//         if(this.isEmpty()) return undefined;
//         return this.items[this.front];
//     }

//     reverse(str){
//         const q = new queue()
//         for(let key of str){
//             q.enqueue(key)
//         }
//         let rev = ''
//         while(!q.isEmpty()){
//             rev = q.dequeue() + rev
//         }
//         return rev;
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log('Queue is Empty....');            
//         } else {
//             console.log(this.items);            
//         }
//     }
// }

// const qq = new queue();

// qq.enqueue(99)
// qq.enqueue(91)
// qq.enqueue(89)
// qq.enqueue(79)

// qq.display()

// qq.dequeue()

// qq.display()

// console.log(qq.reverse("joohny"))


// withLinkedlist
// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class queue{
//     constructor(){
//         this.head = null
//     }

//     isEmpty(){
//         return this.head === null;
//     }

//     enqueue(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode
//         } else {
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = newNode
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()) return undefined;
//         let curr = this.head
//         this.head = curr.next
//         return curr;
//     }

//     peek(){
//         if(this.isEmpty()) return undefined;
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty...");            
//         } else {
//             let curr = this.head
//             while(curr){
//                 console.log(curr.value);
//                 curr = curr.next
//             }
//         }
//     }
// }


// const qqq = new queue()

// qqq.enqueue(555);
// qqq.enqueue(10);
// qqq.enqueue(18);
// qqq.enqueue(11);

// qqq.display()

// qqq.dequeue()

// console.log("--------------");

// qqq.dequeue()

// qqq.enqueue(555);

// qqq.display()


// queuetoStack

// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class stack{
//     constructor(){
//         this.head = null
//     }

//     isEmpty(){
//         return this.head === null
//     }

//     push(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//         } else {
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }

//     pop(){
//         if(this.isEmpty()) return undefined;
//         let curr = this.head
//         this.head = curr.next
//         return curr;
//     }

//     peek(){
//         if(this.isEmpty()) return undefined;
//         let curr = this.head
//         while(curr){
//             curr = curr.next
//         }
//         return curr.value        
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("LInkedList STack Is Empty");
//         } else {
//             let curr = this.head
//             while(curr){
//                 console.log(curr.value);
//                 curr = curr.next                
//             }
//         }
//     }
// }

// class queue{
//     constructor(){
//         this.head = null
//     }

//     isEmpty(){
//         return this.head === null;
//     }

//     enqueue(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode
//         } else {
//             let curr = this.head
//             while(curr.next){
//                 curr = curr.next
//             }
//             curr.next = newNode
//         }
//     }

//     dequeue(){
//         if(this.isEmpty()) return undefined;
//         let curr = this.head
//         this.head = curr.next
//         return curr;
//     }

//     peek(){
//         if(this.isEmpty()) return undefined;
//         return this.head.value
//     }

//     toStack(){
//         if(this.isEmpty()) return undefined;
//         const newq = new stack()
//         let curr = this.head
//         while(curr){
//             newq.push(curr.value)
//             curr = curr.next
//         }
//         return newq
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty...");            
//         } else {
//             let curr = this.head
//             while(curr){
//                 console.log(curr.value);
//                 curr = curr.next
//             }
//         }
//     }
// }


// const qqq = new queue()

// qqq.enqueue(555);
// qqq.enqueue(10);
// qqq.enqueue(18);
// qqq.enqueue(11);

// // qqq.display()

// qqq.dequeue()

// console.log("--------------");

// // qqq.dequeue()

// // qqq.enqueue(555);

// qqq.display()

// const staack = qqq.toStack()

// console.log("--------------");

// staack.display()

// staack.pop()

// staack.display()


class circularQueue{
    constructor(capcity){
        this.items = new Array(capcity)
        this.capcity = capcity;
        this.length = 0;
        this.rear = -1
    }

    isEmpty(){
        return this.length === 0;
    }


}

const cQ = new circularQueue(5)

