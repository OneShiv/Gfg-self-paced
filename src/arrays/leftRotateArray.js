export function leftRotateArray(arr, k) {
  k = k % arr.length;
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr;
}

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
export function naiveLeftRotateArray(arr, k) {
  for (let i = 0; i < k; i++) {
    let temp = arr[0];
    for (let j = 1; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
