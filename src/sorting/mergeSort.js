function mergeFunction(arr, low, mid, high) {
  let a1 = [],
    a2 = [];
  let n1 = mid - low + 1,
    n2 = high - mid;
  for (let i = 0; i < n1; i++) {
    a1[i] = arr[low + i];
  }
  for (let i = 0; i < n2; i++) {
    a2[i] = arr[mid + 1 + i];
  }
  let ptr1 = 0,
    ptr2 = 0,
    ptr3 = low;
  while (ptr1 < n1 && ptr2 < n2) {
    if (a1[ptr1] <= a2[ptr2]) {
      arr[ptr3] = a1[ptr1];
      ptr1++;
    } else {
      arr[ptr3] = a2[ptr2];
      ptr2++;
    }
    ptr3++;
  }
  while (ptr1 < n1) {
    arr[ptr3] = a1[ptr1];
    ptr3++;
    ptr1++;
  }
  while (ptr2 < n2) {
    arr[ptr3] = a2[ptr2];
    ptr3++;
    ptr2++;
  }
}

function mergeSort(arr, low, high) {
  if (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    mergeFunction(arr, low, mid, high);
  }
}
let nums = [100, 45, 200, 12];
let low = 0,
  high = nums.length - 1;
mergeSort(nums, low, high);
console.log(nums);
