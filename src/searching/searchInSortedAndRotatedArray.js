export const searchSortedRotated = (arr, N) => {
  let start = 0;
  let end = arr.length - 1;

  // determine to go left or right
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === N) {
      return mid;
    }
    // [10,20,40,60,5,8] 5 mid 40
    // [100,200,300,40,60,80,90] 30 , 200 mid 40
    // [400,500,10,50,90]
    if (arr[start] < arr[mid]) {
      if (N >= arr[start] && N < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (N > arr[mid] && N <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};
