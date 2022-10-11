export function maxSubArraySumNaive(arr) {
  let overallSum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let curr = 0;
    for (let j = i; j < arr.length; j++) {
      curr += arr[j];
      overallSum = Math.max(curr, overallSum);
    }
  }
  return overallSum;
}

export function maxSubArraySumEfficientKadanes(arr) {
  let maxEnding = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEnding = Math.max(arr[i] + maxEnding, arr[i]);
    max = Math.max(max, maxEnding);
  }
  return max;
}

export function minSubArraySumEfficientKadanes(arr) {
  let minEnding = arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    minEnding = Math.min(arr[i] + minEnding, arr[i]);
    min = Math.min(min, minEnding);
  }
  return min;
}
