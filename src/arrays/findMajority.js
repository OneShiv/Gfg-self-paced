export function findMajority(arr) {
  // element in majority if it appears more than n/2 times
  let index = 0;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[index]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      index = i;
      count = 1;
    }
  }

  let candidateCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[index]) {
      candidateCount++;
    }
  }
  if (candidateCount > arr.length / 2) {
    return index;
  } else {
    return -1;
  }
}
