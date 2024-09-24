let array = [20,-4,8,5,1,11];
function bubbleSort(arr){
    for(let i = 0; i<arr.length - 1; i++){
        for(let j = i + 1; j <arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr;
}
console.log(bubbleSort(array));


function selectionSort(arr){
    for(let i = 0; i<arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
    }
    return arr;
}
console.log(selectionSort(array));


function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        for(var j = i - 1; arr[j] > temp && j > -1; j--){
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }
    return arr;
}
console.log(insertionSort(array));


function quickSort(arr){
    if(arr.length < 2) return arr;
    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > pivot){
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.log(quickSort(array));


function merge(arr){
    if(arr.length < 2) return arr;
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return mergeSort(merge(left),merge(right));
}

function mergeSort(left,right){
    let sortedArray = [];
    while(left.length&& right.length){
        if(left[0] > right[0]){
            sortedArray.push(right.shift())
        }else{
            sortedArray.push(left.shift())
        }
    }
    return [...sortedArray,...left,...right];
}
console.log(merge(array));
