export function jospehsProblem(N, k) {
  if (N === 1) {
    return 0;
  }
  return (jospehsProblem(N - 1, k) + k) % N;
}
