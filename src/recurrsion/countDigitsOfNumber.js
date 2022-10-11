export function countDigits(N) {
  if (N === 0) {
    return 0;
  }
  return 1 + countDigits(Math.floor(N / 10));
}
