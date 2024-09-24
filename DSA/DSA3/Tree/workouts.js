// class Node{
//     constructor(){
//         this.children = {};
//         this.endNode = false;
//     }
// }

// class tre{
//     constructor(){
//         this.root = new Node();
//     }

//     insert(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new Node()
//             }
//             curr = curr.children[char];
//         }
//         curr.endNode = true;
//     }

//     search(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!curr.children[char]){
//                 return false;
//             }
//             curr = curr.children[char];
//         }
//         return curr.endNode;
//     }

//     print(node = this.root , curr = '' , result = []){
//         if(node.endNode){
//             result.push(curr);
//         }
//         for(let chars in node.children){
//             this.print(node.children[chars], curr + chars , result);
//         }
//         return result;
//     }

//     startWith(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!curr.children[char]){
//                 return false;
//             }
//             curr = curr.children[char]
//         }
//         return true;
//     }

//     hasChildre(node){
//         return Object.keys(node.children).length > 0;
//     }

//     deletesChar(word){
//         const recursive = (currNode , word , index) => {
//             if(word.length === index){
//                 if(!currNode.endNode){
//                     return false;
//                 }
//                 currNode.endNode = false;
//                 return !this.hasChildre(currNode)
//             }
//             let curr = word[index];
//             let nextNode = currNode.children[curr]

//             if(!nextNode){
//                 return false;
//             }

//             let shouldDelete = recursive(nextNode , word , index + 1);
//             if(shouldDelete){
//                 delete currNode.children[curr];
//                 return !this.hasChildre(currNode)
//             }
//             return false;
//         }
//         recursive(this.root , word , 0)

//     }

//     longestPrefix(){
//         let prefix = '';
//         let curr = this.root;
//         while(curr && Object.keys(curr.children).length > 0){
//             let keys = Object.keys(curr.children);
//             let nextChar = keys[0]
//             prefix += nextChar;
//             curr = curr.children[nextChar]
//             if(curr.endNode){
//                 break;
//             }
//         }
//         return prefix;
//     }


//     autoCompletion(word){
//         let result = [];
//         let curr = this.root;
//         for(let char of word){
//             if(!curr.children[char]){
//                 return [];
//             }
//             curr = curr.children[char]
//         }
//         this.child(curr,word,result);
//         return result;
//     }

//     child(node,word,list){
//         if(node.endNode){
//             list.push(word)
//         }
//         for(let cha in node.children){
//             this.child(node.children[cha] , word + cha , list)
//         }
//     }

// }

// const treeee = new tre()

// let words = ['fl', 'flow', 'flower', 'flight', 'neena']
// for(let word of words){
//     treeee.insert(word)
// }

// console.log(treeee.search('flow'))

// console.log(treeee.print())

// console.log(treeee.startWith('fli'))

// treeee.deletesChar('flower');

// console.log(treeee.print())

// console.log(treeee.longestPrefix())

// console.log(treeee.autoCompletion('fl'));


// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class bst{
//     constructor(){
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)
//         if(this.isEmpty()){
//             this.root = newNode;
//         } else {
//             this.insertChilds(this.root,newNode)
//         }
//     }

//     insertChilds(root,newNode){ 
//         if(newNode.value < root.value){
//             if(root.left === null){
//                 root.left = newNode;
//             } else{
//                 this.insertChilds(root.left,newNode)
//             }
//         } else{
//             if(root.right === null){
//                 root.right = newNode;
//             } else{
//                 this.insertChilds(root.right,newNode)
//             }
//         }
//     }

//     search(root,value){
//         if(!root){
//             return false;
//         } else {
//             if(value === root.value){
//                 return true;
//             } else if(value < root.value){
//                 return this.search(root.left,value)
//             } else {
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value);
//             this.preOrder(root.left);
//             this.preOrder(root.right);        
//         }
//     }

//     inOrder(root){
//         if(root){
//             this.inOrder(root.left);
//             console.log(root.value);
//             this.inOrder(root.right)   
//         }
//     }

//     postOrder(root){
//         if(root){
//             this.postOrder(root.left);
//             this.postOrder(root.right);
//             console.log(root.value);
//         }
//     }

//     levelOrder(){
//         const queue = [];
//         queue.push(this.root);
//         while(queue.length){
//             let curr = queue.shift()
//             console.log(curr.value);
//             if(curr.left){
//                 queue.push(curr.left)
//             }
//             if(curr.right){
//                 queue.push(curr.right)
//             }
//         }
//     }

//     min(root){
//         if(!root.left) return root.value;
//         else return this.min(root.left);
//     }

//     max(root){
//         if(!root.right) return root.value;
//         else return this.max(root.right)
//     }

//     deletes(value){
//         if(!this.root){
//             return null;
//         } else {
//             this.root = this.deleteHelper(this.root,value)
//         }
//     }

//     deleteHelper(root,value){
//         if(!root){
//             return root;
//         }
//             if(value < root.value){
//                 root.left = this.deleteHelper(root.left , value)
//             } else if(value > root.value){
//                 root.right = this.deleteHelper(root.right,value)
//             } else {
//                 if(!root.left){
//                     return root.right
//                 }
//                 if(!root.right){
//                     return root.left;
//                 }
                
//                 root.value = this.min(root.right);
//                 root.right = this.deleteHelper(root.right , value)
//             }
//             return root;
//     }   
// }

// const bstree = new bst()

// bstree.insert(35)
// bstree.insert(20)
// bstree.insert(45)
// bstree.insert(15)
// bstree.insert(5)
// bstree.insert(25)

// console.log(bstree.search(bstree.root,15));

// console.log(bstree.preOrder(bstree.root));
// console.log(bstree.inOrder(bstree.root));
// console.log(bstree.postOrder(bstree.root));

// console.log("---------------");

// console.log(bstree.levelOrder())

// console.log(bstree.min(bstree.root));
// console.log(bstree.max(bstree.root));

// bstree.deletes(45)

// console.log(bstree.levelOrder())

// console.log(bstree.min(bstree.root));
// console.log(bstree.max(bstree.root));

class hp{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value);
        this.#heapifyUp(this.heap.length - 1)
    }

    remove(value){
        let min = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.#heapifyDown(0)
    }

    #heapifyUp(index){
        let curr = index;
        let parentIdx = this.parent(curr)
        while(this.heap[curr] < this.heap[parentIdx]){
            this.swap(curr,parentIdx);
            curr = parentIdx
        }
    }

    #heapifyDown(index){
        let smallest = index;
        let leftChild = this.leftChild(index)
        let rightChild = this.rightChild(index);
        if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
            smallest = leftChild;
        }
        
        if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[smallest]){
            smallest = leftChild;
        }
        while(smallest)
    }

    leftChild(ind){
        return 2 * ind + 1
    }

    rightChild(ind){
        return 2 * ind + 2
    }

    parent(index){
        return Math.floor((index - 1)/2);
    }

    swap(ind1,ind2){
        [this.heap[ind1],this.heap[ind2]] = [this.heap[ind2],this.heap[ind1]];
    }

    toArray(){
        return [...this.heap]
    }


}

const hh = new hp();

hh.insert(5)
hh.insert(3)
hh.insert(6)
hh.insert(15)
hh.insert(1)

console.log(hh.toArray())