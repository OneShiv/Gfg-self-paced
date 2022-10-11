export function secondLargestEl(arr) {
  let max = arr[0];
  let secondMax = arr[1];
  let index = max > secondMax ? 0 : 1;
  let secondMaxIndex = max > secondMax ? 1 : 0;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
      secondMaxIndex = index;
      index = i;
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMaxIndex = i;
      secondMax = arr[i];
    }
  }
  if (max === secondMax) {
    return -1;
  }
  return secondMaxIndex;
}
