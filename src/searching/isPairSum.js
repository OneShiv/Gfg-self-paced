// to check if there is pair satisfying sum
// given that we have a sorted array

export const isPair = (arr, sum) => {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;

  while (ptr1 < ptr2) {
    let curr_sum = arr[ptr1] + arr[ptr2];
    if (curr_sum === sum) {
      return true;
    }
    if (curr_sum > sum) {
      ptr2--;
    } else {
      ptr1++;
    }
  }
  return false;
};
