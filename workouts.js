class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class singleLinkedlist{
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

    prepend(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(value){
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

    indexInsert(index,value){
        if(index < 0 || index >= this.size) return undefined
        if(index === 0) return this.prepend(value)
        if(index === this.size - 1) return this.append(value)
        let newNode = new Node(value)
        let curr = this.head
        for(let i = 0; i< index -1; i++){
            curr = curr.next
        }
        let temp = curr.next
        curr.next = newNode
        newNode.next = temp
        this.size++        
    }

    valueInsert(value,newValue){
        if(this.head.value === value) return this.prepend(newValue)
        
        let curr = this.head
        let newNode = new Node(newValue)
        while(curr){
            if(curr.value === value){
                newNode.next = curr.next
                curr.next = newNode
                return
            }
            curr = curr.next
        }
        this.size++
    }

    firstRemove(){
        if(this.isEmpty()) return undefined
        let curr = this.head
        this.head = curr.next
        curr.next = null
        this.size--
    }

    lastRemove(){
        if(this.isEmpty()) return undefined
        let curr = this.head
        let prev = null
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        prev.next = null
        this.size--
    }

    indexGet(index){
        if(index < 0 || index >= this.size) return undefined
        if(index === 0) return this.head.value
        let curr = this.head
        for(let i = 0; i< index; i++){
            curr = curr.next
        }
        return curr.value
    }

    middleFind(){
        if(this.isEmpty()) return undefined
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    middleRem(){
        if(this.isEmpty()) return undefined
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
    }

    split(){
        if(this.isEmpty()) return undefined
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast.next && fast.next.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = null
        return [this.head,prev]
    }

    reverse(){
        if(this.isEmpty()) return undefined
        let curr = this.head
        let prev = null
        let next = null
        while(curr){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    toArray(){
        let arr = []
        let curr = this.head    
        while(curr){
            arr.push(curr.value)
            curr = curr.next
        }
        return arr
    }

    fromArray(arr){
        arr.forEach((e) => {
            this.append(e)
        })
    }

    findMax(){
        let curr = this.head
        let max = 0
        while(curr){
            if(curr.value > max){
                max = curr.value
            }
            curr = curr.next
        }
        return max
    }

    thirdLargest(){
        let curr = this.head
        let max = -Infinity
        let secMa = -Infinity
        let thir = -Infinity
        while(curr){
            if(curr.value > max){
                thir = secMa
                secMa = max
                max = curr.value
            }else if(curr.value > secMa && curr.value !== max){
                thir = secMa
                secMa = curr.value
            }else if(curr.value > thir && curr.value !== secMa && curr.value !== max){
                thir = curr.value
            }
            curr = curr.next
        }
        return thir
    }

    powerOfTwo(){
        let curr = this.head
        let powerOftwo = []
        while(curr){
            if((curr.value & (curr.value - 1)) === 0 && curr.value !== 0){
                powerOftwo.push(curr.value)
            }
            curr = curr.next
        }
        return powerOftwo
    }

    duplicate() {
        let curr = this.head
        while(curr){
            let prev = curr
            let runner = curr.next
            while(runner){
                if(curr.value === runner.value){
                    prev.next = runner.next
                    this.size--
                }else{
                    prev = runner
                }
                runner = runner.next
            }   
            curr = curr.next
        }
    }

    last3(){
        if(this.isEmpty()){
            return undefined
        }
        let curr = this.head
        let length = this.size
        let res = []
        let count = 0

        console.log('list size',this.size);
        

        let start = length - 3
        if(start < 0){
            start = 0
        }

        while(curr){
            if(count >= start){
                res.push(curr.value)
            }

            curr =curr.next
            count++

        }
        console.log('res',res);
        
        return res
    }

    palindrome(){
        if(!this.head || !this.head.next) return true

        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }

        let curr = slow
        let prev = null
        while(curr){
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        let firstHalf = this.head
        let secondHalf = prev

        while(secondHalf){
            if(secondHalf.value !== firstHalf.value) return false

            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }
        return true
    }

    sort(){
        if(!this.head) return null
        let newNode = new Node(0)
        while(this.head){
            let temp = this.head
            this.head = this.head.next
            let curr = newNode
            while(curr){
                if(!curr.next || temp.value <= curr.next.value){
                    [curr.next,temp.next] = [temp,curr.next]
                    break;
                }
                curr = curr.next
            }
        }
        return newNode.next
    }
    
    print(){
        if(this.isEmpty()){
            console.log('List is empty Nothing to list');            
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value}-`
                curr = curr.next
            }
            console.log(listValues);            
        }
    }


}


const list = new singleLinkedlist()
const list1 = new singleLinkedlist()

list.prepend(25)
list.prepend(20)
list.append(31)
list.append(41)
list.append(45)
list.firstRemove()
list.lastRemove()
list.print()
list.indexInsert(0,20)
list.indexInsert(2,29)
list.indexInsert(3,50)
list.print()
list.valueInsert(20,49)
console.log(list.indexGet(0))
list.print()
console.log(list.middleFind())
list.middleRem()
list.middleRem()
list.print()
console.log(list.middleFind())
list.print()
list.reverse()
console.log(list.split())
list.print()
console.log(list.toArray())
list1.prepend(20)
list1.prepend(25)
list1.append(488)
list1.append(70)
list1.append(69)
list1.print()
console.log(list1.toArray())
list1.print()
list.fromArray([3,4,31,8,3,8])
console.log(list1.findMax())
console.log(list1.thirdLargest())
// console.log(list1.t())
console.log(list.powerOfTwo());
list.print()
list.duplicate()
list.print()
console.log(list.last3());
console.log(list.palindrome())
list1.print()
console.log(list1.sort())
list1.print()



// function mergeList(list,list1){
//     let curr1 = list.toArray()
//     let curr2 = list1.toArray()    

//     let sort = [...curr1, ...curr2].sort((a,b) => a-b)

//     const newlist = new singleLinkedlist()

//     newlist.fromArray(sort)

//     return newlist
// }

// const mergeLists = mergeList(list,list1)
// mergeLists.print()


// class Node{
//     constructor(value){
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class doubleLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }else{
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }

//     prepend(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             newNode.next = this.head
//             this.head.prev = newNode
//             this.head = newNode
//         }
//         this.size++
//     }

//     pop(){
//         if(this.isEmpty()) return undefined
//         let temp = this.tail.prev
//         if(this.size == 1){
//             this.head = null
//             this.tail = null
//         }else{
//             this.tail = temp
//             this.tail.next = null
//             temp.prev = null
//         }
//         this.size--
//     }

//     shift(){
//         if(this.isEmpty()) return undefined
//         let temp = this.head
//         if(this.size == 1){
//             this.head = null
//             this.tail = null
//         }else{
//             this.head = this.head.next
//             this.head.prev = null
//             temp.next = null
//         }
//         this.size--
//     }

//     insert(index,value){
//         if(index < 0 || index > this.size) return undefined
//         if(index === 0) return this.prepend(value)
//         if(index === this.size) return this.append(value)
//         const newNode = new Node(value)
//         let curr = this.head
//         for(let i = 0; i<index-1; i++){
//             curr = curr.next
//         }
//         let before = curr
//         let after = curr.next
//         before.next = newNode
//         newNode.prev = before
//         after.prev = newNode
//         newNode.next = after
//         this.size++
//     }

//     insertVal(value,newValue){
//         if(this.isEmpty())return undefined
//         if(this.head.value === value) return this.prepend(newValue)
//         if(this.tail.value === value) return this.append(newValue)
//         let newNode = new Node(newValue)
//         let curr = this.head
//         while(curr){
//             if(curr.value === value){
//                 newNode.next = curr.next
//                 newNode.prev = curr
//                 curr.next = newNode
//                 newNode.next.prev = newNode
//                 this.size++
//                 return 
//             }
//             curr = curr.next
//         }
//     }

//     get(index){
//         if(index < 0 || index > this.size) return undefined
//         let curr = this.head
//         if(index < this.size/2){
//             for(let i = 0; i< index; i++){
//                 curr = curr.next
//             }
//         }else{
//             curr = this.tail
//             for(let i = this.size - 1; i> index; i--){
//                 curr = curr.prev
//             }
//         }
//         return curr
//     }

//     set(index,value){
//         let temp = this.get(index)
//         if(temp){
//             temp.value = value
//             return true
//         }
//         return false
//     }

//     remove(index){
//         if(index < 0 || index >= this.size) return undefined
//         if(index === 0) return this.shift()
//         if(index === this.size - 1) return this.pop()
//         let temp = this.get(index)
//         temp.prev.next = temp.next
//         temp.next.prev = temp.prev
//         temp.next = null
//         temp.prev = null
//         this.size--
//     }

//     rev() {
//         if(this.isEmpty()) return undefined;
//         let curr = this.head;
//         let temp = null;
//         while(curr) {
//             temp = curr.prev;
//             curr.prev = curr.next;
//             curr.next = temp;
//             curr = curr.prev;
//         }
//         if(temp) {
//             this.tail = this.head;
//             this.head = temp.prev;
//         }
//     }
    
//     middle(){
//         if(this.isEmpty()) return undefined
//         let slow = this.head
//         let fast = this.head
//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         slow.prev.next = slow.next
//         slow.prev = null
//         slow.next = null
//         this.size--
//     }

//     split(){
//         if(this.isEmpty()) return undefined
//         let slow = this.head
//         let fast = this.head
//         let temp = null
//         while(fast && fast.next){
//             temp = slow
//             slow = slow.next
//             fast = fast.next.next
//         }
//         const firstHalf = new doubleLinkedList()
//         const secondHalf = new doubleLinkedList()

//         firstHalf.head = this.head
//         firstHalf.tail = temp
//         temp.next = null

//         secondHalf.head = slow
//         secondHalf.tail = this.tail
//         slow.prev = null

//         return [firstHalf,secondHalf]
//     }

//     toArray(){
//         let arr = []
//         let curr = this.head
//         while(curr){
//             arr.push(curr.value)
//             curr = curr.next
//         }
//         return arr
//     }

//     fromArray(arr){
//         let newList = new doubleLinkedList()
//         for(let value of arr){
//             newList.append(value)
//         }
//         return newList
//     }

//     max(){
//         let curr = this.head
//         let max = 0
//         while(curr){
//             if(curr.value > max){
//                 max = curr.value
//             }
//             curr = curr.next
//         }
//         return max
//     }

//     secondMax(){
//         let curr = this.head
//         let max = -Infinity
//         let secMa = -Infinity
//         while(curr){
//             if(curr.value > max){
//                 secMa = max
//                 max = curr.value
//             }else if(curr.value > secMa && curr.value !== max){
//                 secMa = curr.value
//             }
//             curr = curr.next
//         }
//         return secMa
//     }

//     powerOftwo(){
//         let curr = this.head
//         let pt = []
//         while(curr){
//             if((curr.value & (curr.value - 1)) === 0 && curr.value !== 0){
//                 pt.push(curr.value)
//             }
//             curr = curr.next
//         }
//         return pt
//     }

//     dup(){
//         let curr = this.head
//         while(curr){
//             let prev = curr
//             let runner = curr.next
//             while(runner){
//                 if(curr.value === runner.value){
//                     prev.next = runner.next
//                     runner.next.prev = prev
//                     this.size--
//                 }else{
//                     prev = runner
//                 }
//                 runner = runner.next
//             }
//             curr = curr.next
//         }
//     }

//     palindrome(){
//         if(!this.head || !this.head.next) return true
//         let slow = this.head
//         let fast = this.head
//         while(fast && fast.next){
//             slow = slow.next
//             fast = fast.next.next
//         }

//         let curr = slow
//         let temp = null
//         while(curr){
//             temp = curr.prev
//             curr.prev = curr.next
//             curr.next = temp
//             curr = curr.prev
//         }

//         let firstHalf = this.head
//         let secondHalf = temp

//         while(secondHalf){
//             if (secondHalf.value !== firstHalf.value) {
//                 curr = temp;
//                 let originalPrev = null;
//                 while (curr) {
//                     originalPrev = curr.prev;
//                     curr.prev = curr.next;
//                     curr.next = originalPrev;
//                     curr = curr.prev;
//                 }
//                 return false;
//             }
//             firstHalf = firstHalf.next
//             secondHalf = secondHalf.next
//         }
//         curr = temp;
//     let originalPrev = null;
//     while (curr) {
//         originalPrev = curr.prev;
//         curr.prev = curr.next;
//         curr.next = originalPrev;
//         curr = curr.prev;
//     }

//     return true;

//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is emppty");
//         }else{
//             let curr = this.head
//             let listvalue = ''
//             while(curr){
//                 listvalue += `${curr.value}-`
//                 curr = curr.next
//             }
//             console.log(listvalue);            
//         }
//     }
// }


// const list = new doubleLinkedList()


// list.prepend(33)
// list.prepend(24)
// list.prepend(55)
// list.append(30)
// list.append(35)
// list.append(39)
// // list.pop()
// // list.pop()
// // list.pop()
// list.print()
// list.shift()
// list.shift()
// list.print()
// list.insert(4,37)
// list.print()
// list.get(2)
// // list.set(2,33)
// list.print()
// // list.remove(4)
// list.print()
// list.rev()
// // console.log(list.middle());
// list.middle()
// list.print()
// list.insertVal(39,35)
// list.print()
// // console.log(list.split());
// console.log(list.toArray());
// list.toArray()
// console.log(list.max());
// console.log(list.secondMax());
// list.print()

// let arr = [9,4,7,3,7,4,9]
// const fromArraylist = list.fromArray(arr)
// fromArraylist.print()
// console.log(fromArraylist.max());
// console.log(fromArraylist.secondMax());
// console.log(fromArraylist.powerOftwo())
// // fromArraylist.dup()
// console.log(fromArraylist.palindrome());

// fromArraylist.print()



// recursion..........................................

// function sumOfArray(n){
//     if(n <= 0) return n
//         return n + sumOfArray(n - 1)
// }
// console.log(sumOfArray(10));


// let array = [3,4,5,7,8,9,6]

// function linearSearch(arr,t){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === t){
//             return true
//         }
//     }
//     return false
// }
// console.log(linearSearch(array,6));


// function binarySearch(arr,t){
//     let left = 0
//     let right = arr.length - 1
    
//     while(left <= right){
//         let middle = Math.floor((left + right )/2)

//         if(t===arr[middle]){
//             return true
//         }
//         if(t < arr[middle]){
//             right = middle - 1
//         }else{
//             left = middle + 1
//         }

//     }
//     return false
// }
// let array = [3,4,5,6,7,2,8,9,]
// let aarray = [3,4,5,6,7,7,8,9,]
// console.log(binarySearch(aarray,9));
// console.log(binarySearch(array,7));
// console.log(binarySearch(array,11));

// rec////////////////////////////////
// function binaryRec(arr,t,left,right){
//     if(left > right){
//         return false
//     }
//     let middle = Math.floor((left + right)/2)

//     if(arr[middle] === t){
//         return true
//     }
//     if(t < arr[middle]){
//         return binaryRec(arr,t,left,middle - 1)
//     }else{
//         return binaryRec(arr,t,middle + 1,right)
//     }
// }
// let arr = [3,4,5,6,7,8,9]
// console.log(binaryRec(arr,91,0,arr.length - 1));


// function sumOfArray(n){
//     if(n <= 0) return 0
//     return sumOfArray(n - 1) + n
// }
// console.log(sumOfArray(5));


// function factorial(n){
//     if(n === 1) return 1
//     return factorial(n - 1) * n
// }
// console.log(factorial(5));


// function fibnocci(n){
//     if(n <= 1) return n
//     return fibnocci(n - 1) + fibnocci(n - 2)
// }

// console.log(fibnocci(6));


// function deleteChar(str,t,i = 0){
//     if(str.length === i) return str
//     if(str[i] === t){
//         str = str.replace(t,"")
//         return deleteChar(str,t,i)
//     }
//     return deleteChar(str,t,i + 1)
// }
// let strings = 'Winning'
// console.log(deleteChar(strings,'n'));


// function reverseString(str){
//     if(str === '') return ''
//     return reverseString(str.slice(1)) + str[0]
// }
// let strings = 'ssap'
// console.log(reverseString(strings));


// function palindromeREc(str){
//     if(str.length <= 1) return true
//     if(str[0] !== str[str.length - 1]) return false
//     return palindromeREc(str.slice(1,str.length - 1))
// }
// let strings = 'paasaap'
// console.log(palindromeREc(strings));


// function palindrome(n){
//     for (let i = 0 , j = n.length - 1; i < j; i++ , j--) {
//         if(n[i] !== n[j]){
//             return false
//         }        
//     }
//     return true
// }
// let strings= 'madam'
// console.log(palindrome(strings));

// function sum(n){
//     let s = 0
//     for(let i = 0; i<n.length - 1; i++){
//         s += n[i]
//     }
//     return s
// }

// console.log(sum([3,4,5,56,6]));


// function remDup(str){

//     let a = []
//     let s = ''
//     for(let v of str){
//         if(!a.includes(v)){
//             a.push(v)
//             s += v
//         }
//     }
//     return s
// }

// let str = 'sameasdaylike'
// console.log(remDup(str));


// function countCharacters(char){
//     let count = []
//     for(let c of char){
//         count[c] = count[c] + 1 || 1
//     }
//     return count
// }
// let str = 'mynameishaneen'
// console.log(countCharacters(str));


// function fibnocci(n){
//     let fib = [0,1]
//     for(let i = 2;i < n;i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }
// console.log(fibnocci(6));


// function rev(str){
//     let r  = ''
//     for(let i = str.length -1 ; i >= 0; i--){
//         r += str[i]
//     }
//     return r
// }

// console.log(rev('reverse'));



