function mergeTwoSortedarrays(a1, a2) {
  let newArr = new Array(a1.length + a2.length);
  let ptr1 = 0,
    ptr2 = 0;
  let ptr3 = 0;
  while (ptr1 < a1.length && ptr2 < a2.length) {
    if (a1[ptr1] <= a2[ptr2]) {
      newArr[ptr3] = a1[ptr1];
      ptr1++;
    } else {
      newArr[ptr3] = a2[ptr2];
      ptr2++;
    }
    ptr3++;
  }
  while (ptr1 < a1.length) {
    newArr[ptr3] = a1[ptr1];
    ptr3++;
    ptr1++;
  }
  while (ptr2 < a2.length) {
    newArr[ptr3] = a2[ptr2];
    ptr3++;
    ptr2++;
  }
  return newArr;
}

console.log(
  "two merged arrays",
  mergeTwoSortedarrays([1, 2, 5, 9], [3, 6, 7, 12])
);
