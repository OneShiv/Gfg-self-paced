export function mergeFunction(arr, low, mid, high) {
  let a1 = [],
    a2 = [];
  let ptr1 = 0,
    ptr2 = 0,
    ptr3 = 0;
  for (let i = low; i <= mid; i++) {
    a1[ptr1++] = arr[i];
  }
  for (let i = mid + 1; i <= high; i++) {
    a2[ptr2++] = arr[i];
  }
  ptr1 = 0;
  ptr2 = 0;
  ptr3 = 0;
  while (ptr1 < a1.length && ptr2 < a2.length) {
    if (a1[ptr1] <= a2[ptr2]) {
      arr[ptr3] = a1[ptr1];
      ptr1++;
    } else {
      arr[ptr3] = a2[ptr2];
      ptr2++;
    }
    ptr3++;
  }
  while (ptr1 < a1.length) {
    arr[ptr3] = a1[ptr1];
    ptr3++;
    ptr1++;
  }
  while (ptr2 < a2.length) {
    arr[ptr3] = a2[ptr2];
    ptr3++;
    ptr2++;
  }
  return arr;
}

const arr = [3, 9, 34, 56, 7, 24, 38];
let low = 0;
let high = arr.length - 1;
let mid = 3;
console.log(mergeFunction(arr, low, mid, high));
