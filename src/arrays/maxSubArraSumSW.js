export function maxSumSubarraySizeK(arr, K) {
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
