export function subArrayWithGivenSum(arr, sum) {
  for (let i = 1; i <= arr.length; i++) {
    if (maxSumSubarraySizeK(arr, i) === sum) {
      return true;
    }
  }
  return false;
}

function maxSumSubarraySizeK(arr, K) {
  // [1, 8, 30, -5, 20, 7]
  let maxSum = 0;
  let currentSum = 0;
  for (let i = 0; i < K; i++) {
    maxSum = maxSum + arr[i];
  }
  currentSum = maxSum;
  for (let i = 1; i <= arr.length - K; i++) {
    currentSum = currentSum - arr[i - 1] + arr[i + K - 1];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// above solution if O(n^2)

export function getSubArrayWithGivenSum(arr, givenSum) {
  let startIndex = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > givenSum) {
      sum = sum - arr[startIndex];
      startIndex++;
    }
    if (sum === givenSum) {
      return true;
    }
  }
  return false;
}
