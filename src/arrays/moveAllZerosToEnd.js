export function moveAllZerosToEnd(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
  return arr;
}
