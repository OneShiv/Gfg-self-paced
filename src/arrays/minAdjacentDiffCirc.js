export function minAdjacentDiff(arr) {
  let min = Infinity;
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    let curr = Math.abs(arr[i] - arr[(i + 1) % N]);
    min = Math.min(curr, min);
  }
  return min;
}
