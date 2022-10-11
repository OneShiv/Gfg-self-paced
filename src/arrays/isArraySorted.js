export function isSortedArray(arr) {
  let flag = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      flag = false;
      break;
    }
  }
  return flag;
}
