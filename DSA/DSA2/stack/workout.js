// using array
// class stack{
//     constructor(){
//         this.items = [];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     push(value){
//         this.items.push(value);
//     }

//     pop(){
//         return this.items.pop()
//     }

//     peek(){
//         return this.items[this.items.length - 1]
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Stack is Empty Currently....");            
//         }else{
//             console.log(this.items.toString());            
//         }
//     }
// }

// const ss = new stack();

// ss.push(13)
// ss.push(16)
// ss.push(19)

// console.log(ss.peek())

// ss.display()

// ss.pop()

// console.log(ss.peek())

// ss.display()

// using linkedlist
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
//         return this.head === null;
//     }

//     push(value){
//         const newNode = new Node(value);
//         if(this.isEmpty()){
//             this.head = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }

//     pop(){
//         if(this.isEmpty()) return undefined;
//         const item = this.head
//         this.head = item.next
//         return item;
//     }

//     peek(){
//         return this.head.value
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("List is Empty");            
//         }else{
//             let curr = this.head
//             while(curr){
//                 console.log(curr.value);
//                 curr = curr.next                
//             }
//         }
//     }
// }

// const ss = new stack()

// ss.push(30)
// ss.push(40)
// ss.push(50)

// ss.display()

// console.log(ss.peek())

// ss.pop()

// console.log("..............");

// ss.display()

// console.log(ss.peek())


// converting queue to stack
// class Queue{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//         this.front = 0
//     }

//     isEmpty(){
//         return this.rear - this.front === 0;
//     }

//     enqueue(value){
//         this.items[this.rear] = value
//         this.rear++
//     }

//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     peek(){
//         return this.items[this.front];
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Queue is Empty");            
//         }else{
//             console.log(this.items);            
//         }
//     }

//     toStack(){
//         const stac = new stack()
//         const tempq = new Queue()
//         while(!this.isEmpty()){
//             const item = this.dequeue()
//             stac.push(item)
//             tempq.enqueue(item)
//         }
//         while(!tempq.isEmpty()){
//             this.enqueue(tempq.dequeue())
//         }
//         return stac;
//     }

// }


// using object
// class stack{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//     }

//     isEmpty(){
//         return this.rear === 0;
//     }

//     push(value){
//         this.items[this.rear] = value;
//         this.rear++
//     }

//     pop(){
//         this.rear--
//         const item = this.items[this.rear];
//         delete this.items[this.rear];
//         return item;
//     }

//     peek(){
//         return this.items[this.rear - 1];
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Stack is Empty");            
//         }else{
//             console.log(this.items);            
//         }
//     }

//     toQueue(){
//         let queue = new Queue()
//         let stac = new stack()
//         while(!this.isEmpty()){
//             stac.push(this.pop())
//         }
//         while(!stac.isEmpty()){
//             const ele = stac.pop()
//             queue.enqueue(ele)
//             this.push(ele)
//         }
//         return queue;
//     }
// }

// const ss = new stack()

// ss.push(20)
// ss.push(30)
// ss.push(40)

// ss.display()

// console.log(ss.peek());

// ss.pop()
// ss.pop()

// console.log(ss.peek());

// ss.display()

// const qqq = ss.toQueue();

// qqq.enqueue(89)
// qqq.enqueue(99)

// qqq.display()

// qqq.dequeue()
// qqq.dequeue()

// qqq.display()


// console.log("..............");


// const qq = new Queue()

// qq.enqueue(50)
// qq.enqueue(60)
// qq.enqueue(70)

// qq.display()

// console.log(qq.peek());

// qq.dequeue()
// qq.dequeue()

// console.log(qq.peek());

// qq.display()

// const sta = qq.toStack()

// sta.display()

// sta.push(68)
// sta.push(38)
// sta.push(28)
// sta.push(18)

// sta.pop()

// sta.display()


// class stack{
//     constructor(){
//         this.items = {}
//         this.rear = 0
//     }

//     isEmpty(){
//         return this.rear === 0;
//     }

//     push(value){
//         this.items[this.rear] = value;
//         this.rear++
//     }

//     pop(){
//         this.rear--
//         const item = this.items[this.rear];
//         delete this.items[this.rear];
//         return item;
//     }

//     peek(){
//         return this.items[this.rear - 1];
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("Stack is Empty");            
//         }else{
//             console.log(this.items);            
//         }
//     }

//     midRem(){
//         const mid = Math.floor(this.rear/2);
//         const sta = new stack()
//         for(let i = 0; i<mid;i++){
//             sta.push(this.pop());
//         }
//         this.pop();
//         while(!sta.isEmpty()){
//             this.push(sta.pop());
//         }
//     }

//     toQueue(){
//         let queue = new Queue()
//         let stac = new stack()
//         while(!this.isEmpty()){
//             stac.push(this.pop())
//         }
//         while(!stac.isEmpty()){
//             const ele = stac.pop()
//             queue.enqueue(ele)
//             this.push(ele)
//         }
//         return queue;
//     }
// }

// const ss = new stack()

// ss.push(20)
// ss.push(30)
// ss.push(330)
// ss.push(304)
// ss.push(301)
// ss.push(402)

// ss.display()

// console.log(ss.peek());

// ss.pop()
// // ss.pop()

// console.log(ss.peek());

// ss.display()

// ss.midRem()

// ss.display()

// const qqq = ss.toQueue();

// qqq.enqueue(89)
// qqq.enqueue(99)

// qqq.display()

// qqq.dequeue()
// qqq.dequeue()

// qqq.display()