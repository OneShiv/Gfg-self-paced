export const tirplet = (arr, N) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let x = N - arr[i];
    if (isPair(arr, x, i + 1, arr.length - 1)) {
      return true;
    }
  }
  return false;
};

// [2,5,10,15,18]   33
const isPair = (arr, remaining, start, end) => {
  let ptr1 = start;
  let ptr2 = end;
  while (ptr1 < ptr2) {
    if (arr[ptr1] + arr[ptr2] === remaining) {
      return true;
    }
    if (arr[ptr1] + arr[ptr2] > remaining) {
      ptr2--;
    } else {
      ptr1++;
    }
  }
};
