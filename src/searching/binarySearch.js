export const bsIterative = (arr, el) => {
  let index = -1;
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === el) {
      return mid;
    } else if (el < arr[mid]) {
      end = mid - 1;
    } else if (el > arr[mid]) {
      start = mid + 1;
    }
  }

  return index;
};

export const bsRecurrsive = (arr, el, start, end) => {
  if (start > end) {
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === el) {
    return mid;
  }
  if (el > arr[mid]) {
    return bsRecurrsive(arr, el, mid + 1, end);
  } else {
    return bsRecurrsive(arr, el, start, mid - 1);
  }
};
