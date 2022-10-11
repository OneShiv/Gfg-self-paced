export function missingNumber(arr, n) {
  // [1,2,3,4,5]
  let start = arr.length - 1;
  let end = arr.length - 1;
  // [2, 3, -7, 6, 8, 1, -10, 15]
  for (end; end >= 0; end--) {
    if (arr[end] <= 0) {
      let temp;
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      // increment count of non-positive
      // integers
      start--;
    }
  }
  if (arr.length === end) {
    arr = [];
  } else {
    arr.length = start + 1;
  }
  for (let i = 0; i < arr.length; i++) {
    let x = Math.abs(arr[i]);
    if (x - 1 < arr.length && arr[x - 1] > 0) {
      arr[x - 1] = -arr[x - 1];
    }
  }
  let i;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      return i + 1;
    }
  }
  return arr.length + 1;
}

function segregate(arr, size) {
  let j = 0,
    i;
  for (i = 0; i < size; i++) {
    if (arr[i] <= 0) {
      let temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      // increment count of non-positive
      // integers
      j++;
    }
  }

  return j;
}

/* Find the smallest positive missing
       number in an array that contains
       all positive integers */
function findMissingPositive(arr, size) {
  let i;

  // Mark arr[i] as visited by making
  // arr[arr[i] - 1] negative. Note that
  // 1 is subtracted because index start
  // from 0 and positive numbers start from 1
  for (i = 0; i < size; i++) {
    let x = Math.abs(arr[i]);
    if (x - 1 < size && arr[x - 1] > 0) arr[x - 1] = -arr[x - 1];
  }

  // Return the first index value at which
  // is positive
  for (i = 0; i < size; i++) if (arr[i] > 0) return i + 1; // 1 is added because indexes
  // start from 0

  return size + 1;
}

/* Find the smallest positive missing
       number in an array that contains
       both positive and negative integers */
export function findMissing(arr, size) {
  // First separate positive and
  // negative numbers
  let shift = segregate(arr, size);
  let arr2 = new Array(size - shift);
  let j = 0;
  for (let i = shift; i < size; i++) {
    arr2[j] = arr[i];
    j++;
  }
  console.log(arr2);

  // Shift the array and call
  // findMissingPositive for
  // positive part
  return findMissingPositive(arr2, j);
}
