class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0;
        for(let i = 0; i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key,value){
        const index = this.hash(key);
        // this.table[index] = value
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                sameKey[1] = value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key);
        // return this.table[index]
        const bucket = this.table[index]
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        // this.table[index] = undefined;
        const bucket = this.table[index];
        if(bucket){
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1)
            }
        }
    }

    display(){
        for(let i = 0; i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);                
            }
        }
    }
}

const collision = new hashTable(50)

collision.set('name' , 'hani');
collision.set('age' , 22);
collision.set('place' , 'thrissur');

collision.display();

console.log(collision.get('name'));
console.log(collision.get('place'));

collision.remove('place')

collision.display();