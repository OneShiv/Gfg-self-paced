// so basically naive approach is O(N)
// Unique case where we can use binary search on unsorted array
// idea behind is simple
// [10] : peak 10 [10,20] peak 20 , so any independent array has a pek element always

// we will check if mid id peak if not check which side is peak and move on that side

export const peakElement = (arr) => {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (
      (mid === 0 || arr[mid] >= arr[mid - 1]) &&
      (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])
    ) {
      return arr[mid];
    }

    if (arr[mid + 1] > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};
