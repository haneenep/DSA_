//..................binarySearch.......................

function binarySearch(arr1,t){
    let left = 0
    let right = arr1.length - 1
  
    while(left <= right){
  
      let middle = Math.floor((left + right)/2)
  
      if(t === arr1[middle]){
        return true 
      }
      if(t < arr1[middle]){
        right = middle - 1
      }else{
        left = middle + 1
      }
    }
    return false
  }
  
  console.log(binarySearch([2,3,4,5,6,7,8],4))
  console.log(binarySearch([2,3,4,5,6,7,8],44))
  console.log(binarySearch([2,3,4,5,6,7,8],7))