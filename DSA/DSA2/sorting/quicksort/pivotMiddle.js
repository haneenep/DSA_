function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex]
    let left = [];
    let right = [];
    for(let i = 0; i<arr.length; i++){
        if(i !== pivotIndex){
            if(arr[i] < pivot){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
let array = [4,8,6,3,-1,-3,5];
console.log(quickSort(array));
