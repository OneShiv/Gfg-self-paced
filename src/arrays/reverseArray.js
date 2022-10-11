export function reverseArray(arr) {
  let start = 0;
  let last = arr.length - 1;
  while (start < last) {
    let temp = arr[start];
    arr[start] = arr[last];
    arr[last] = temp;
    start++;
    last--;
  }
  return arr;
}
