export function digitalRoot(N) {
  if (Math.floor(N / 10) === 0) {
    return N;
  }
  let remainder = N % 10;
  return digitalRoot(remainder + digitalRoot(Math.floor(N / 10)));
}
