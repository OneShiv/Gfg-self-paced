export function print1ToN(N) {
  if (N <= 0) {
    return;
  }
  print1ToN(N - 1);
  document.write(`${N} `);
}
