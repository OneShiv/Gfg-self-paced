import { firstOccurence } from "./bsoccurence";

export const countNoOfOnesInBinarySortedArray = (arr) => {
  const firstIndex = firstOccurence(arr, 0, arr.length - 1, 1);
  if (firstIndex === -1) {
    return 0;
  }
  return arr.length - firstIndex;
};
