
palindrome
function palindrome(arr){
        for(let i = 0 , j = arr.length - 1 ; i < j ; i++ , j-- ){
            if(arr[i] !== arr[j]){
                return false;
            }
        }
        return true;
}
let arrr = [1,2,3,3,2,1]
console.log(palindrome(arrr));


function sumArray(arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0] + sumArray(arr.slice(1))
}
let arr = [2,3,4,5,6,7]
console.log(sumArray(arr));


function max(arr){
    let ma = arr[0]
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > ma){
            ma = arr[i]
        }
    }
    return ma
}
let array = [3,4,5,6,7,22]
console.log(max(array));


function secondMax(arr){
    let max = -Infinity
    let second = -Infinity
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > max){
            second = max
            max = arr[i]
        }else if(arr[i] > second && arr[i] < max){
            second = arr[i]
        }
        
    }
    return second === -Infinity ? null : second;
}

let aarr = [2,33,44,5,6,7]
console.log(secondMax(aarr));


function removeDup(str){
    let arr = []
    let s = ''
    for(let char of str){
        if(!arr.includes(char)){
            arr.push(char)
            s += char
        }
    }
    return s
}
let stringg = 'programming'
console.log(removeDup(stringg));


function countCharacters(str){
    let count = []
    for(const char of str){
        count[char] = count[char] + 1 || 1
    }
    return count
}
let sstring = 'mynameishaneen'
console.log(countCharacters(sstring));

function str(s){
    let ss = ''
    for(let i = s.length-1 ; i>= 0 ; i--){
        ss += s[i]
    }
    return ss
    
}
console.log(str('hello world'));


function fibnocci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibnocci(6));

function longestChar(str){
    let words = str.split(' ')
    let longest = ''
    let sum = 0
    for(let word of words){
        if(word.length > sum){
            sum = word.length
            longest = word
        }
    }
    return longest
}
console.log(longestChar('Here is the world glooming so make every moment memmorable'));


function endsWithDot(str){
    if(str.endsWith('.')) return str
    return str + '.'
}
let strings = 'How is it going'
console.log(endsWithDot(strings));



function stringOneCappAndSmall(s){
    let ss = ''
     for(let i = 0; i<s.length; i++){
        if(i%2==0){
            ss += s[i].toUpperCase()
            
        }else{
            ss += s[i]
        }
     }
     return ss
}
let strg = 'haneen'
console.log(stringOneCappAndSmall(strg));