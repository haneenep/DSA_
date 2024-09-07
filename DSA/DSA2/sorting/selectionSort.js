function selectionone(arr){
    let min
    for(let i = 0; i<arr.length - 1; i++){
        min = i
        for(let j = i+1; j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(i !== min){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}
let array = [8,4,2,5,7,9,1,3];
console.log(selectionone(array));
