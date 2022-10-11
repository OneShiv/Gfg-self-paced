export const repeatingElement = (arr) => {
  // rules
  // 1) starts with 0 and till N elements
  // max in array element will be N-2 , if from 1 then till N-1
  // lots of methods
  // O(n^2), even extra array and O(N) etc etc

  // we are using fast and slow pointer approach as we
  // use to find loop in linked list

  let slow = arr[0] + 1;
  let fast = arr[0] + 1;
  // in first we know there is loop
  // let it go till position where they meet
  do {
    slow = arr[slow] + 1;
    fast = arr[arr[fast] + 1] + 1;
  } while (slow !== fast);
  slow = arr[0] + 1;
  while (slow !== fast) {
    slow = arr[slow] + 1;
    fast = arr[fast] + 1;
  }
  return slow - 1;
};
