function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot).concat(quickSort(right))
}
let array = [5,3,-4,8,1,-2,8];
console.log(quickSort(array));
