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
let array = [4,-1,8,20,9,2];
console.log(insertionSort(array));
