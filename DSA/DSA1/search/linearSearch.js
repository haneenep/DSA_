//..................linearSearch......................

let arr = [6,7,4,9,3,6,5]

function linearSearch(arr,target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return true
    }
  }
  return false
}

console.log(linearSearch(arr,9))
console.log(linearSearch(arr,6))
console.log(linearSearch(arr,55))