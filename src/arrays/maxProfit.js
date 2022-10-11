export function maxProfitNaive(arr, start, end) {
  // [1,5,3,8,12]
  // base case
  if (end <= start) {
    return 0;
  }
  let profit = 0;
  for (let i = start; i < end; i++) {
    for (let j = i + 1; j <= end; j++) {
      if (arr[j] > arr[i]) {
        let currentProfit =
          arr[j] -
          arr[i] +
          maxProfitNaive(arr, start, i - 1) +
          maxProfitNaive(j + 1, end);
        profit = Math.max(currentProfit, profit);
      }
    }
  }
  return profit;
}

export function maxProfitEfficient(arr) {
  let profit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      profit = profit + (arr[i + 1] - arr[i]);
    }
  }
  return profit;
}

export function maxPro(A, n) {
  let buySellArr = [];
  let buy, sell;
  if (A.length === 1) {
    return [];
  }
  let i = 0;
  while (i < n) {
    while (i < n - 1 && A[i + 1] <= A[i]) i++;

    if (i === n - 1) break;

    buy = i++;

    while (i < n && A[i] >= A[i - 1]) i++;

    sell = i - 1;

    buySellArr.push([buy, sell]);
    if (i === n - 1) break;
  }
  return buySellArr;
}
