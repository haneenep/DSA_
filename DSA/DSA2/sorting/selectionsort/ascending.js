function selectionSort(arr){
    let min;
    for(let i = 0; i<arr.length; i++){
        min = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(i !== min){
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr
}
let array = [6,49,3,-6,2,8];
console.log(selectionSort(array));
