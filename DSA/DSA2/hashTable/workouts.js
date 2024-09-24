// class hashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let total = 0;
//         for(let i = 0; i<key.length; i++){
//             total += key.charCodeAt(i)
//         }
//         return total % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         // this.table[index] = value
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//         } else {
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 sameKey[1] = value
//             } else{
//                 bucket.push([key,value])
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         // return this.table[index]
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//     }

//     remove(key){
//         const index = this.hash(key)
//         // this.table[index] = undefined;
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }

//     display(){
//         for(let i = 0; i<this.table.length; i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);                
//             }
//         }
//     }
// }

// const hh = new hashTable(50)

// hh.set('name','Haneen')
// hh.set('age',22)
// hh.set('pace','faast')
// hh.set('place','Thrissur')

// hh.display()

// console.log(hh.get('name'))

// hh.remove('name')

// hh.display()





















class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)            
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this.hash(key)
        this.table[index] = undefined;
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i] !== undefined){
                console.log(i , this.table[i]);
            }
        }
    }
}


const ff = new hashTable(50);

ff.set('anem',"haneen");
ff.set('age',22);
ff.set('number',999);

console.log(ff.get('number'))

ff.display()

ff.remove('number');

console.log(ff.get('number'),"ssss")

ff.display()