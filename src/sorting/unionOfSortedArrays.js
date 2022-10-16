// [3,5,8]
// [2,8,9,10,15]
function unionOfTwoSortedArrays(arr1, arr2) {
  let n1 = arr1.length,
    n2 = arr2.length;
  let ptr1 = 0,
    ptr2 = 0;
  let newArr = [];
  while (ptr1 < n1 && ptr2 < n2) {
    while (arr1[ptr1] === arr1[ptr1 + 1] && ptr1 < n1 - 1) {
      ptr1++;
    }
    while (arr2[ptr2] === arr2[ptr2 + 1] && ptr2 < n2 - 1) {
      ptr2++;
    }
    if (arr1[ptr1] === arr2[ptr2] && ptr1 < n1 && ptr2 < n2) {
      newArr.push(arr1[ptr1]);
      ptr1++;
      ptr2++;
    } else if (arr1[ptr1] > arr2[ptr2] && ptr1 < n1 && ptr2 < n2) {
      newArr.push(arr2[ptr2]);
      ptr2++;
    } else {
      newArr.push(arr1[ptr1]);
      ptr1++;
    }
  }
  while (ptr1 < n1) {
    while (arr1[ptr1] === arr1[ptr1 + 1]) ptr1++;
    newArr.push(arr1[ptr1]);
    ptr1++;
  }
  while (ptr2 < n2) {
    while (arr2[ptr2] === arr2[ptr2 + 1]) ptr2++;
    newArr.push(arr2[ptr2]);
    ptr2++;
  }
  return newArr;
}

const a1 = [3, 5, 8];
const a2 = [2, 8, 9, 10, 15];
console.log(unionOfTwoSortedArrays(a1, a2));
