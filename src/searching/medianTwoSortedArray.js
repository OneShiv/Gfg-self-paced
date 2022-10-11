export const medianOfTwoSortedArrays = (a1, a2) => {
  // first thing is a1 length < a2
  // or else swap
  if (a1.length > a2.length) {
    let temp = a1;
    a1 = a2;
    a2 = temp;
  }

  // idea is finding of i1 and i2 from where we can take
  // calculation such that left side entire less than right side

  let low = 0,
    high = a1.length;
  while (low <= high) {
    let i1 = Math.floor((low + high) / 2);
    let i2 = Math.floor((high + a2.length + 1) / 2) - i1;

    let minRight1 = i1 === high ? Infinity : a1[i1];
    let maxLeft1 = i1 === 0 ? -Infinity : a1[i1 - 1];

    let minRight2 = a2[i2];
    let maxLeft2 = a2[i2 - 1];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((a1.length + a2.length) % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft2 > minRight1) {
      low = i1 + 1;
    } else {
      high = i1 - 1;
    }
  }
};
