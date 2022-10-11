export function maximumDifferenceWithOrder(arr) {
  let overAllmax = -99999;
  let index1 = 0;
  let index2 = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let instantMax = -99999;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > instantMax && arr[j] - arr[i] > overAllmax) {
        instantMax = arr[j] - arr[i];
        index2 = j;
      }
    }
    if (instantMax > overAllmax) {
      overAllmax = instantMax;
      index1 = i;
    }
  }
  return arr[index2] - arr[index1];
}

// [2,3,1,10,6,4,8]
export function improvedMaximumDiff(arr) {
  let pointer = 0;
  let min = arr[0];
  let res = -99999;
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[pointer];
    if (arr[i] < min) {
      min = arr[i];
      pointer = i;
    }
    if (diff > res) {
      res = arr[i] - arr[pointer];
    }
  }
  return res;
}
