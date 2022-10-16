function bubbleSort(arr){
    for(let i = 0;i< arr.length -1 ;i++){
        for(let j = 0;j< arr.length -1 - i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([423,42,52,3,23,2]));