export function longestOddEvenSubarray(arr) {
  // [10,12,14,7,8]
  let length = 1;
  let start = arr[0] % 2;
  for (let i = 1; i < arr.length; i++) {
    let mod = arr[i] % 2;
    if (start !== mod) {
      length = Math.max(length, length + 1);
    } else {
      length = 1;
    }
    start = mod;
  }
  return length;
}
