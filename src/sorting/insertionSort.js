function insertionSort(arr) {
  // idea is at any ith position , 0 to i-1 is already sorted array
  // just need to place ith element in proper way in sorted array , starting from 1 position
  const N = arr.length;
  // [9,5,23,67,4]
  // [9,5,23,67,4]
  for (let i = 1; i < N; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort([9, 5, 23, 67, 4]));
