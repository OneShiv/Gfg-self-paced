export const squareRoot = (N) => {
  if (N < 0) {
    return "Imaginary";
  }
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  let i = 2;
  while (i * i <= N) {
    i++;
  }
  return i - 1;
};

export const sqaureRootEfficient = (N) => {
  if (N < 0) {
    return "Imaginary";
  }
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  let low = 2,
    high = N,
    ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (mid * mid === N) {
      return mid;
    }

    if (mid * mid > N) {
      high = mid - 1;
    } else {
      low = mid + 1;
      ans = mid;
    }
  }
  return ans;
};
