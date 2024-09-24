// //  stack
// class stack{
//     constructor(){
//         this.items = [];
//     }

//     isEmpty(){
//         return this.items.length === 0;
//     }

//     getSize(){
//         return this.items.length;
//     }

//     push(value){
//         this.items.push(value)
//     }

//     pop(){
//         return this.items.pop();
//     }

//     peek(){
//         return this.items[this.items.length - 1];
//     }

//     deletingMiddle(){
//         let newStack = new stack()
//         let mid = Math.floor(this.items.length/2);
//         for(let i = 0; i<this.items.length;i++){
//             if(i !== mid){
//                 newStack.push(this.items[i])
//             }
//         }
//         return newStack;
//     }

//     display(){
//         if(this.isEmpty()){
//             console.log("List is Empty");            
//         }else{
//             console.log(this.items.toString());            
//         }
//     }
// }

// const stacks = new stack()

// stacks.push(10)
// stacks.push(20)
// stacks.push(30)
// stacks.push(40)
// stacks.push(50)
// stacks.push(60)

// stacks.display()

// stacks.pop()

// console.log(stacks.peek());

// stacks.display()

// const newStack = stacks.deletingMiddle();

// newStack.display()


// sorting
// function bubbleSort(arr){
//     for(let i = 0; i<arr.length - 1; i++){
//         for(let j = 0; j<arr.length; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr;
// }
// let array = [20,-4,2,8,5,7,-6];
// console.log(bubbleSort(array));

// function selectionSort(arr){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             if(arr[i] > arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr;
// }
// let array1 = [20,-4,2,8,5,7,-6];
// console.log(selectionSort(array1));

// function insertionSort(arr){
//     let t
//     for(let i = 1; i < arr.length; i++){
//         t = arr[i]
//         for(var j = i - 1; arr[j] > t && j > -1; j--){
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = t
//     }
//     return arr;
// }
// let array2 = [20,-4,2,8,5,7,-6];
// console.log(insertionSort(array2));

// function quickSort(arr){
//     if(arr.length < 2) return arr;
//     let pivot = arr[arr.length - 1];
//     let left = []
//     let right = []
//     for(let i = 0; i<arr.length - 1; i++){
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];
// }
// let array3 = [20,-4,2,8,5,7,-6];
// console.log(quickSort(array3));

// function merge(arr){
//     if(arr.length < 2) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
//     return mergeSort(merge(left),merge(right))
// }
// let array4 = [20,-4,2,8,5,7,-6];
// console.log(merge(array4));

// function mergeSort(left,right){
//     let sortedArray = [];
//     while(left.length&&right.length){
//         if(left[0] > right[0]){
//             sortedArray.push(right.shift())
//         }else{
//             sortedArray.push(left.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]
// }
