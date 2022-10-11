export function maxIndexDiff(arr, N) {
  // i/o : [34, 8, 10, 3, 2, 80, 30, 33, 1]
  const minArr = [];
  const maxArr = [];
  minArr[0] = arr[0];
  maxArr[arr.length - 1] = arr[arr.length - 1];
  for (let i = 1; i < arr.length; i++) {
    minArr[i] = Math.min(minArr[i - 1], arr[i]);
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    maxArr[i] = Math.max(arr[i], maxArr[i + 1]);
  }
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    console.log(arr[start], arr[end]);
    if (minArr[start] <= maxArr[end]) {
      break;
    } else {
      if (minArr[start] !== minArr[start + 1]) {
        start++;
      } else if (maxArr[end - 1] !== maxArr[end]) {
        end--;
      }
    }
  }
  console.log(arr[start], arr[end]);
  return end - start;
}
