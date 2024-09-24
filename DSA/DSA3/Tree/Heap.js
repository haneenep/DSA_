// class hp{
//     constructor(){
//         this.heaps = [];
//     }

//     #parent(index){
//         return Math.floor((index - 1)/2);
//     }

//     #leftChild(index){
//         return 2 * index + 1;
//     }

//     #rightChild(index){
//         return 2 * index + 2;
//     }

//     #swap(index1,index2){
//         [this.heaps[index1],this.heaps[index2]] = [this.heaps[index2],this.heaps[index1]];
//     }

//     insert(value){
//         this.heaps.push(value);
//         this.#heapifyUp(this.heaps.length - 1);
//     }

//     #heapifyUp(index){
//         let curr = index;
//         let parentIdx = this.#parent(index);
//         while(index > 0 && this.heaps[curr] < this.heaps[parentIdx]){
//             this.#swap(curr,parentIdx);
//             curr = parentIdx;
//             parentIdx = this.#parent(curr);
//         }
//     }

//     remove(){
//         if(this.heaps.length === 0) return null;
//         if(this.heaps.length === 1) return this.heaps.pop();

//             let min = this.heaps[0];
//             this.heaps[0] = this.heaps.pop();
//             this.#heapifyDown(0)

//             return min;
//     }

//     #heapifyDown(index){
//         let smallest = index;
//         let leftChild = this.#leftChild(index);
//         let rightChild = this.#rightChild(index);
//         if(leftChild < this.heaps.length && this.heaps[leftChild] < this.heaps[smallest]){
//             smallest = leftChild;
//         }
//         if(rightChild < this.heaps.length && this.heaps[rightChild] < this.heaps[smallest]){
//             smallest = rightChild;
//         }
//         if(smallest !== index){
//             this.#swap(index,smallest);
//             this.#heapifyDown(smallest)
//         }
//     }

//     buildArray(array){
//         this.heaps = array;
//         for(let i = Math.floor(this.heaps.length / 2) - 1; i >= 0; i--){
//             this.#heapifyDown(i)
//         }
//     }

//     heapSort(){
//         let sortedArray = [];
//         let heaps = this.heaps.length;
//         for(let i = 0; i < heaps; i++){
//             let item = this.remove()
//             sortedArray.push(item)
//         }
//         return sortedArray;
//     }

//     peek(){
//         return this.heaps[0]
//     }

//     toArray(){
//         return [...this.heaps]
//     }
// }

// const h = new hp();

// h.buildArray([6,3,8,1,9,4,5]);

// console.log(h.peek())

// console.log(h.toArray());

// console.log(h.heapSort());


class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(index) {
        let currentIndex = index;
        while (this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    remove() {
        if (this.isEmpty()) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);

        return min;
    }

    heapifyDown(index) {
        let smallest = index;
        const leftChild = this.getLeftChildIndex(index);
        const rightChild = this.getRightChildIndex(index);

        if (leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]) {
            smallest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] < this.heap[smallest]) {
            smallest = rightChild;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapifyDown(smallest);
        }
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    // New methods start here

    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2); i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    decreaseKey(index, newValue) {
        if (newValue > this.heap[index]) {
            throw new Error("New value is greater than current value");
        }
        this.heap[index] = newValue;
        this.heapifyUp(index);
    }

    delete(index) {
        this.decreaseKey(index, -Infinity);
        this.remove();
    }

    heapSort() {
        const sortedArray = [];
        const heapSize = this.size();
        for (let i = 0; i < heapSize; i++) {
            sortedArray.push(this.remove());
        }
        return sortedArray;
    }

    toArray() {
        return [...this.heap];
    }

    clear() {
        this.heap = [];
    }

    contains(value) {
        return this.heap.includes(value);
    }
}