export function maxSubArraySumCircularNaive(arr) {
  let N = arr.length;
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let current_sum = arr[i];
    let current_max = arr[i];
    // [5,-2,3,4]
    for (let j = 1; j < arr.length; j++) {
      let index = (i + j) % N;
      current_sum = current_sum + arr[index];
      current_max = Math.max(current_max, current_sum);
    }
    res = Math.max(current_max, res);
  }
  return res;
}

// idea for best solution is
// a0 a1 a2 ....ai) .""""""...(aj ....an-1
// .               this in between is the min SubArray Sum
// get maxSubArray using kadane's algo and tfrom sum of all subtract min Subarray sum

export function minSubArraySumKadanes(arr) {
  let sum = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i] + sum, arr[i]);
    res = Math.min(res, sum);
  }
  return res;
}

export function maxSubArraySumKadanes(arr) {
  let sum = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i] + sum, arr[i]);
    res = Math.max(res, sum);
  }
  return res;
}

export function getSum(arr) {
  return arr.reduce((acc, el) => acc + el, 0);
}

export function getMaxSubrraySumCircEfficient(arr) {
  let res = maxSubArraySumKadanes(arr);
  // imp condition
  if (res < 0) {
    return res;
  }
  return Math.max(res, getSum(arr) - minSubArraySumKadanes(arr));
}
