import { bsRecurrsive } from "./binarySearch";

export const searchNumberInInfiniteArray = (arr, N) => {
  if (arr[0] === N) {
    return 0;
  }
  let i = 1;
  while (arr[i * 2] <= N) {
    i = i * 2;
    console.log(i);
  }
  console.log(i);
  return bsRecurrsive(arr, N, i, i * 2);
};
