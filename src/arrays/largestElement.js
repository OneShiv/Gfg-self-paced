export function getLargestElement(arr) {
  let max = -Infinity;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}
