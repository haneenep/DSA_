function bubbleSort(arr){
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] < arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            } 
        }
    }
    return arr;
}
let array = [7,5,3,8,9,-4,2];
console.log(bubbleSort(array));
