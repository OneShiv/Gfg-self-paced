function selectionSort(arr) {
  let N = arr.length;

  // idea is to find max element and place at last position
  for (let i = 0; i < N; i++) {
    let maxIndex = 0;
    for (let j = 0; j < N - i; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== null) {
      let temp = arr[N - 1 - i];
      arr[N - 1 - i] = arr[maxIndex];
      arr[maxIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([23, 19, 322, 2323, 35]));
