function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sortedArray = [];
    while(left.length && right.length){
        if(left[0] > right[0]){
            sortedArray.push(left.shift())
        } else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right];
}

let arrays = [5,3,-4,8,1,-2,8];
console.log(mergeSort(arrays));
