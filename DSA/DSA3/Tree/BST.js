class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    isempty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isempty()){
            this.root = newNode;
        } else {
            this.insertNewNode(this.root,newNode)
        }
    }

    insertNewNode(root,newNode){
        if(newNode < root.value){
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNewNode(root.left,newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNewNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        } else {
            if(root.value === value){
                return true;
            } else if(value < root.value){
                return this.search(root.left,value)
            } else {
                return this.search(root.right,value)
            }
        }
    }

    // DFS
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);     
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);            
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);            
        }
    }

    // BFS
    levelOrder(){
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);    
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }

    min(root){
        if(!root.left) return root.value;
        else return this.min(root.left);
    }

    max(root){
        if(!root.right) return root.value;
        else return this.min(root.right);
    }

    delete(value){
        if(!this.root){
            return null;
        } else {
            this.root = this.deleteHelper(this.root,value)
        }
    }

    deleteHelper(root,value){
        if(!root){
            return root;
        }
        if(value < root.value){
            root.left = this.deleteHelper(root.left,value)
        } else if(value > root.value){
            root.right = this.deleteHelper(root.right,value)
        } else {
            if(!root.left){
                return root.right;
            }
            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right);
            root.right = this.deleteHelper(root.right,value)

        }
        return root;
    }

    heightOfBST(root){
        if(!root){
            return -1;
        }
        let leftHeight = this.heightOfBST(root.left);
        let rightHeight = this.heightOfBST(root.right);

        return Math.max(leftHeight,rightHeight) + 1
    }

    countNodes(root){
        if(!root){
            return 0;
        }
        return 1 + this.countNodes(root.left) + this.countNodes(root.right)
    }

    isBST(root,min = -Infinity , max = Infinity){
        if(!root) return true;
        if(root.value <= min || root.value >= max) return false;
        return (
            this.isBST(root.left , min , root.value) &&
            this.isBST(root.right, root.value , max)
        );
    }

}


const bst = new BST()

console.log(bst.isempty());

bst.insert(20)
bst.insert(10)
bst.insert(25)
bst.insert(5)
bst.insert(3)
bst.insert(7)

console.log(bst.isempty());

console.log(bst.search(bst.root,55))
console.log(bst.search(bst.root,5))

bst.postOrder(bst.root)

bst.levelOrder()

console.log("..........");

console.log(bst.min(bst.root))

console.log(bst.max(bst.root))

console.log("..........");

bst.levelOrder()

console.log("..........");

bst.delete(20)

bst.levelOrder()

console.log(bst.heightOfBST(bst.root))

console.log(bst.countNodes(bst.root))

console.log(bst.isBST(bst.root))