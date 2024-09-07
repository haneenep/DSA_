// arrays and strings

// function fibnocci(n){
//     let fib = [0,1]
//     for(let i = 2; i<n; i++){
//         fib[i] = fib[i - 1] + fib[i - 2]
//     }
//     return fib
// }
// console.log(fibnocci(5));

// function palindrome(arr){
//     for(let i = 0,j = arr.length - 1; i<j; i++,j--){
//         if(arr[i] !== arr[j]){
            
//             return false;
//         }
//     }
//     return true
// }
// let array = [1,2,3,4,4,3,2,1];
// console.log(palindrome(array));


// function palindromeStr(str){
//     for(let i = 0,j= str.length -1; i<j;i++,j--){
//         if(str[i] !== str[j]){
//             return false;
//         }
//     }
//     return true;
// }
// let strings = 'howsswoh';
// console.log(palindromeStr(strings));

// function longestChar(char){
//     let words = char.split(' ')
//     let longest = ''
//     let r = 0
//     for(let word of words){
//         if(word.length > r){
//             r = word.length
//             longest = word
//         }
//     }
//     return longest
// }
// let chars = 'john is the strongest';
// console.log(longestChar(chars));


// function countCharacters(str){
//     let count = []
//     for(const char of str){
//         count[char] = count[char] + 1 || 1
//     }
//     return count
// }
// let sstring = 'mynameishaneen'
// console.log(countCharacters(sstring));


// function endsWith(str){
//     if(str.endsWith('.')) return str;
//     return str + '.'
// }
// let stringss = 'this is it';
// console.log(endsWith(stringss));


// function stringOneCappAndSmall(str){
//     let res = ''
//     for(let i = 0; i<str.length; i++){
//         if(i%2==0){
//            res += str[i].toUpperCase();
//         }else{
//            res += str[i]
//         }
//     }
//     return res;
// }
// let stringsss = 'haneen';
// console.log(stringOneCappAndSmall(stringsss));


// function fLargestAndsLargest(arr){
//     let fLargest = -Infinity;
//     let sLargest = -Infinity;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > fLargest){
//             sLargest = fLargest
//             fLargest = arr[i]
//         }else if(arr[i] > sLargest && fLargest !== arr[i]){
//             sLargest = arr[i]
//         }
//     }
//     return [fLargest,sLargest];
// }
// let arrays = [22,33,44,55,66,556,77,89,122];
// console.log(fLargestAndsLargest(arrays));


// function unCommon(ar,ar1){
//     let set1 = new Set(ar)
//     let set2 = new Set(ar1)

//     let arr = [...set1].filter((e) => !set2.has(e))
//     let arr1 = [...set2].filter((e) => !set1.has(e))

//     let uncommons = [...arr,...arr1];

//     return uncommons;
// }
// let arr1 = [2,3,4,5,6]
// let arr2 = [2,33,4,55,6]
// console.log(unCommon(arr1,arr2));

// function sort(arr){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i+1; j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }
// let aarr = [77,55,3,5,677,34];
// console.log(sort(aarr));

// function subArray(arr){
//     let sum = 0;
//     let rs = []
//     for(let i = 0; i<arr.length; i++){
//         sum += arr[i]
//         if(arr[i] > arr[i + 1]){
//             rs.push([sum])
//             sum = 0
//         }
//     }
//     if(sum > 0){
//         rs.push([sum])
//     }
//     return rs;
// }
// let arryas = [3,4,5,2,6,8,5,9,11];
// console.log(subArray(arryas));


// function primeNumber(n){
//     if(n <= 1) return false;
//     for(let i = 2;i <Math.sqrt(n); i++){
//         if(n % 2 === 0){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(primeNumber(18));


// recursion

// function fibnoccci(n){
//     if(n < 2) return n;
//     return fibnoccci(n - 1) + fibnoccci(n - 2);
// }
// console.log(fibnoccci(6));


// function sumArray(arr,i = 0,res = 0){
//     if(arr.length === i) return res;
//     return sumArray(arr,i+1,res += arr[i]);
// }
// let array = [2,3,4,5,6,77];
// console.log(sumArray(array));


// function palindrome(arr){
//     if(arr.length < 2) return true;
//     if(arr[0] !== arr[arr.length - 1]) return false;
//     return palindrome(arr.slice(1,-1))
// }
// let array1 = [2,3,4,5,5,4,3,2];
// console.log(palindrome(array1));


// function reverseArray(arr,i=0){
//     if( i > arr.length/2 ) return arr;
//     [arr[i],arr[arr.length - 1 -i]] = [arr[arr.length - 1 -i] , arr[i]];
//     return reverseArray(arr,i+1)
// }
// let array3 = [9,8,7,6,6,5,4,3,2,1];
// console.log(reverseArray(array3));


// function reverseString(str){
//     if(str.length === 0) return str;
//     return reverseString(str.slice(1)) + str[0]
// }
// let strings = 'backpass';
// console.log(reverseString(strings));


// function factorial(n){
//     if(n < 2) return 1;
//     return factorial(n - 1) * n
// }
// console.log(factorial(6));


// function flattenArray(arr,res = []){
//     if(arr.length === 0) return res;
//     let [fArr,...rArr] = arr;
//     if(Array.isArray(fArr)){
//         flattenArray(fArr,res)
//     }else{
//         res.push(fArr)
//     }
//     return flattenArray(rArr,res);
// }
// let deepNestedArray = [
//     [4,5,6,7,7,3],
//     [2,3,4,44,5,644],
//     [22,44,232,3,6]
// ]
// console.log(flattenArray(deepNestedArray));


// function oddNumber(arr,i = 0,res = []){
//     if(arr.length === i) return res;
//     if(arr[i]%2!==0){
//         res.push(arr[i])
//     }
//     return oddNumber(arr,i+1,res)
// }
// let arris = [2,3,4,5,6,7,8,9,10];
// console.log(oddNumber(arris));


function powerOfTwo(n){
    if(n <= 0) return false
    if(n === 1) return true;
    if(n % 2 !== 0) return false;
    return powerOfTwo(n/2)
}
console.log(powerOfTwo(16));





//  linkedlist

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size
    }

    append(value){
        const newNode = new Node(value)
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

    firstDelete(){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        this.head = this.head.next
        if(this.size === 1){
            this.head = null
        }        
        curr.next = null
        this.size--
    }

    lastDelete(){
        if(this.isEmpty()) undefined;
        let curr = this.head
        let prev = null
        while(curr.next){
            prev = curr
            curr = curr.next
        }
        if(this.size == 1){
            this.head = null
        }else{
            prev.next = null
        }
        this.size--
    }

    insertIndex(index,value){
        if(index < 0 || index > this.size) return undefined;
        if(index === 0) return this.prepend(value);
        if(index === this.size) return this.append(value);
        const newNode = new Node(value);
        let curr = this.head
        for(let i = 0; i<index - 1; i++){
            curr = curr.next
        }
        newNode.next = curr.next
        curr.next = newNode
        this.size++
    }

    indexDelete(index){
        if(index < 0 || index >= this.size || this.isEmpty()) return undefined;
        if(index === 0) return this.firstDelete();
        if(index === this.size - 1) return this.lastDelete();
        let curr = this.head
        for(let i = 0; i<index-1;i++){
            curr = curr.next
        }
        curr.next = curr.next.next
        this.size--
    }

    middle(){
        if(this.isEmpty()) return undefined;
        let slow = this.head
        let fast = this.head
        while(fast && fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    deleteMiddle(){
        if(this.isEmpty()) return undefined;
        let slow = this.head
        let fast = this.head
        let prev = null
        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }
        prev.next = slow.next
        this.size--
    }

    insertAfterValue(value,val){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        while(curr){
            const newNode = new Node(val)
            if(curr.value === value){
                newNode.next = curr.next
                curr.next = newNode
            }
            curr = curr.next
        }
        this.size++
    }

    reverse(){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        let prev = null
        while(curr){
            const next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    sort(){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        while(curr){
            let check = curr.next
            while(check){
                if(curr.value > check.value){
                    [curr.value,check.value] = [check.value,curr.value]
                }
                check = check.next
            }
            curr = curr.next
        }
    }

    duplicate(){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        while(curr){
            let prev = curr
            let runner = curr.next
            while(runner){
                if(curr.value === runner.value){
                    prev.next = runner.next
                }else{
                    prev = runner
                }
                runner = runner.next
            }
            curr = curr.next
        }
        this.size--
    }

    palindrome(){
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
            if(firstHalf.value !== secondHalf.value){
                return false
            }
            firstHalf = firstHalf.next
            secondHalf = secondHalf.next
        }
        return true;
    }

    poweroftwo(){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        let pof2 = []
        while(curr){
            if((curr.value & (curr.value) - 1) === 0 && curr.value !== 0){
                pof2.push(curr.value)
            }
            curr = curr.next
        }
        return pof2;
    }

    last3(n){
        if(this.isEmpty()) return undefined;
        let curr = this.head
        let l = this.size - n;
        console.log(l,"currrr");
        for(let i = 0; i<l - 1; i++){
            curr = curr.next
        }
        this.head = curr.next
        let temp = this.head
        while(temp){
            temp = temp.next
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("Linked List is Null");            
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value}->`
                curr = curr.next
            }
            console.log(listValues);            
        }
    }


}

const ll = new linkedlist()

ll.append(70)
ll.append(80)
ll.append(90)

ll.prepend(70)
ll.prepend(80)
ll.prepend(90)

ll.lastDelete()

ll.firstDelete()

ll.insertIndex(0,30)
ll.insertIndex(1,40)
ll.insertIndex(6,90)

ll.indexDelete(0)

// console.log(ll.middle().value)

// ll.deleteMiddle()

// ll.insertAfterValue(60,70)
// ll.insertAfterValue(50,55)

// ll.print()

// ll.reverse()

// ll.print()

// ll.sort()

// ll.print()

// ll.append(50)
// ll.append(60)

// ll.print()

ll.print()

ll.last3(3)

ll.print()

function mergeList(l1,l2){
    let ll1 = l1.head
    let ll2 = l2.head
    const newlists = new linkedlist()
    while(ll1 || ll2){
        if(!ll2){
            newlists.append(ll1.value)
            ll1 = ll1.next
        }else if(!ll1){
            newlists.append(ll2.value)
            ll2 = ll2.next
        }else{
            if(ll2.value>ll1.value){
                newlists.append(ll1.value)
                ll1 = ll1.next
            }else{
                newlists.append(ll2.value)
                ll2 = ll2.next
            }
        }
    }
    return newlists;

}

const lll = mergeList(ll,ll)

lll.print()

