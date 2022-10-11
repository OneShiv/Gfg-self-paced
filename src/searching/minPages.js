export const minPages = (arr, N, K) => {
  if (K === 1) {
    return sum(arr, 0, N - 1);
  }
  if (N === 1) {
    return arr[0];
  }
  let res = Infinity;
  for (let i = 1; i < N; i++) {
    res = Math.min(res, Math.max(minPages(arr, i, K - 1), sum(arr, i, N - 1)));
  }
};

const sum = (arr, start, end) => {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
};

const maxInArray = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
};

export const minPagesEfficient = (arr, N, K) => {
  // first find max by one student if only 1 student
  // also find max by student if multiple student
  let high = sum(arr, 0, N - 1);
  let low = maxInArray(arr);

  console.log(low, high);
  let res = Infinity;
  // range lies between both
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let noOfStudent = 1;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] <= mid) {
        sum = sum + arr[i];
      } else {
        sum = arr[i];
        noOfStudent++;
      }
    }
    if (noOfStudent <= K) {
      res = Math.min(res, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
};
