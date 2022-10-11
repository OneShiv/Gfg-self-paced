export function maxOccuredInRange(L, R, n) {
  let res = new Array(1000).fill(0);
  for (let i = 0; i < n; i++) {
    res[L[i]]++;
    res[R[i] + 1]--;
  }
  let max = res[0];
  let index = 0;
  for (let i = 1; i < res.length; i++) {
    res[i] += res[i - 1];
    if (max < res[i]) {
      max = res[i];
      index = i;
    }
  }
  return index;
}
