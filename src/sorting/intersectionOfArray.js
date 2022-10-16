// [1,2,3,3,9,9,11]
// [3,6,7,7,9,9,12]
function interSectionOfArrays(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let ptr1 = 0;
  let ptr2 = 0;
  let newArr = [];
  while (ptr1 < n1 && ptr2 < n2) {
    while (arr1[ptr1] === arr1[ptr1 + 1]) {
      ptr1++;
    }
    while (arr2[ptr2] === arr2[ptr2 + 1]) {
      ptr2++;
    }
    if (arr1[ptr1] === arr2[ptr2]) {
      newArr.push(arr1[ptr1]);
      ptr1++;
      ptr2++;
    }
    if (arr1[ptr1] > arr2[ptr2]) {
      ptr2++;
    } else {
      ptr1++;
    }
  }
  return newArr;
}
let a1 = [1, 2, 3, 3, 9, 9, 11];
let a2 = [3, 6, 7, 7, 9, 9, 12];
console.log(interSectionOfArrays(a1, a2));

let a3 = [1, 2, 3];
let a4 = [4, 5, 6];
console.log(interSectionOfArrays(a3, a4));
