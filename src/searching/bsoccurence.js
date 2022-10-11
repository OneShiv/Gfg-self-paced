export const firstOccurence = (arr, low, high, x) => {
  let mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  }
  if (arr[mid] === x) {
    if (mid === 0 || arr[mid] !== arr[mid - 1]) {
      return mid;
    } else {
      return firstOccurence(arr, low, mid - 1, x);
    }
  }

  if (x > arr[mid]) {
    return firstOccurence(arr, mid + 1, high, x);
  } else {
    return firstOccurence(arr, low, mid - 1, x);
  }
};

export const lastOccurence = (arr, low, high, x) => {
  let mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  }
  if (arr[mid] === x) {
    if (mid === arr.length - 1 || arr[mid] !== arr[mid + 1]) {
      return mid;
    } else {
      return lastOccurence(arr, mid + 1, high, x);
    }
  }

  if (x > arr[mid]) {
    return lastOccurence(arr, mid + 1, high, x);
  } else {
    return lastOccurence(arr, low, mid - 1, x);
  }
};

export const countOccurencesInSortedArray = (arr, x) => {
  const firstOccurenceIndex = firstOccurence(arr, 0, arr.length - 1, x);
  const lastOccurenceIndex = lastOccurence(arr, 0, arr.length - 1, x);

  if (firstOccurenceIndex === -1 || lastOccurenceIndex === -1) {
    return 0;
  } else {
    return lastOccurenceIndex - firstOccurenceIndex + 1;
  }
};
