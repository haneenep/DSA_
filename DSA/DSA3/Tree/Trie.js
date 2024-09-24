class Node{
    constructor(){
        this.children = {}
        this.endWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }

    insert(string){
        let curr = this.root;
        for(var char of string){
            if(!curr.children[char]){
                curr.children[char] = new Node();
            }
            curr = curr.children[char];
        }
        curr.endWord = true;
    }

    search(letter){
        let curr = this.root;
        for(let char of letter){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char];
        }
        return curr.endWord
    }

    print(node = this.root , currentNode = '' , result =[]){
        if(node.endWord){
            result.push(currentNode);
        }
        for(let char in node.children){
            this.print(node.children[char],currentNode + char , result);
        }
        return result;
    }

    hasChild(node){
        return Object.keys(node.children).length>0;
    }

    deletess(word){
        const recursive = (currNode,word,index) => {
            if(index === word.length){
                if(!currNode.endWord){
                    return false;
                }
                currNode.endWord = false;
                return !this.hasChild(currNode);
            }

            const char = word[index];
            const nextNode = currNode.children[char];

            if(!nextNode){
                return false;
            }

            const shouldDelete = recursive(nextNode,word,index + 1);

            if(shouldDelete){
                delete currNode.children[char];
                return !this.hasChild(currNode) && !currNode.endWord;
            }
            return false;
        }
        recursive(this.root, word, 0);
    }

    startWith(prefix){
        let curr = this.root;
        for(let char of prefix){
            if(!curr.children[char]){
                return false;
            }
            curr = curr.children[char]
        }
        return true;
    }

    longestPrefix(){
        let prefix = '';
        let curr = this.root;
        while(curr && Object.keys(curr.children).length > 0){
            let keys = Object.keys(curr.children);
            let nextChar = keys[0];
            prefix += nextChar;
            curr = curr.children[nextChar];
            if(curr.endWord){
                break;
            }
        }
        return prefix;
    }

    autoCompletetion(word){
        let curr = this.root
        let result = []
        for(let char of word){
            if(!curr.children[char]){
                return [];
            }
            curr = curr.children[char]
        }
        this.combination(curr,word,result);
        return result;  
    }

    combination(node,wor,list){
        if(node.endWord){
            list.push(wor)
        }

        for(let char in node.children){
            this.combination(node.children[char], wor + char , list)
        }
    }

    prints(){
        console.log(this.root.children);        
    }

}

const tries = new Trie();


tries.insert("flow");
tries.insert('flower');
tries.insert("flight");
tries.insert("fl");
tries.insert('neena')

console.log(tries.print())
7
console.log(tries.search('neena'));

 console.log("----------------");
 
tries.deletess("flow")

console.log(tries.search('neena'));

console.log(tries.print())

console.log(tries.search("fl"));

console.log("----------------");

console.log(tries.startWith("fl"));

console.log(tries.search("fl"));

console.log(tries.longestPrefix());

// tries.print()

console.log(tries.autoCompletetion('fl'))