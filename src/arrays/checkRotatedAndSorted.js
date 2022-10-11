export function checkRotatedAndSorted(arr, N) {
  // 3,4,1,2
  let flag = "";
  let pivot;

  for (let i = 1; i < N; i++) {
    if (arr[(i + 1) % N] <= arr[i] && arr[i - 1] <= arr[i]) {
      pivot = i;
      flag = "inc";
      break;
    }
  }
  console.log("pivot after inc", pivot);
  if (!pivot) {
    for (let i = 1; i < N; i++) {
      if (arr[(i + 1) % N] >= arr[i] && arr[i - 1] >= arr[i]) {
        pivot = i;
        flag = "dec";
        break;
      }
    }
  }
  console.log("pivot", pivot);
  if (!pivot) {
    return false;
  }

  if (flag === "inc") {
    let i;
    let _flag = true;
    for (i = 0; i < pivot; i++) {
      if (arr[i] < arr[i + 1]) flag = flag && true;
      else {
        flag = flag && false;
      }
    }
    for (i = i + 1; i < N - 1; i++) {
      if (arr[i] > arr[i + 1]) flag = flag && true;
      else {
        flag = flag && false;
      }
    }
    return _flag;
  } else {
    let i;
    let _flag = true;
    for (i = 0; i < pivot; i++) {
      if (arr[i] > arr[i + 1]) flag = flag && true;
      else {
        flag = flag && false;
      }
    }
    for (i = i + 1; i < N - 1; i++) {
      if (arr[i] > arr[i + 1]) flag = flag && true;
      else {
        flag = flag && false;
      }
    }
    return _flag;
  }
}
