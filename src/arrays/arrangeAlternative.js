export function arrangeAlternative(arr) {
  let n = arr.length;
  let minArr = [];
  let maxArr = [];
  let start = 0,
    end = n - 1;
  while (start < end) {
    minArr.push(arr[start]);
    maxArr.push(arr[end]);
    start++;
    end--;
  }
  if (arr.length % 2 === 1) {
    minArr[start] = arr[start];
  }

  let i = 0;
  let j = 0;
  while (i < minArr.length && j < maxArr.length) {
    arr[2 * i] = maxArr[j];
    arr[2 * i + 1] = minArr[j];
    i++;
    j++;
  }
  let otherStart = 2 * i;
  while (i < maxArr.length) {
    arr[otherStart] = maxArr[i];
    otherStart++;
    i++;
  }
  while (j < minArr.length) {
    arr[otherStart] = minArr[j];
    otherStart++;
    j++;
  }
  return arr;
}
