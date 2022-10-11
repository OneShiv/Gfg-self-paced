export function maxEvenOdd(arr, N) {
  for (let i = 0; i < N; i++) {
    arr[i] = arr[i] % 2;
  }

  let i = 0;
  let count;
  let max = -Infinity;
  while (i < N) {
    count = 0;
    while (arr[i] === 0 && i < N) {
      count++;
      i++;
    }

    max = Math.max(max, count);

    count = 0;
    while (arr[i] === 1 && i < N) {
      count++;
      i++;
    }

    max = Math.max(max, count);
  }

  return max;
}
