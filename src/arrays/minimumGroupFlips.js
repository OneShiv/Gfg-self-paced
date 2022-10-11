export function minFlips(arr) {
  // [1,1,0,0,0,1]
  let prev = arr[0];
  let zeroGroups = prev ? 0 : 1;
  let oneGroup = prev ? 1 : 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== prev) {
      if (arr[i]) {
        oneGroup++;
      } else {
        zeroGroups++;
      }
      prev = arr[i];
    }
  }
  let elToCheck = zeroGroups > oneGroup ? 1 : 0;
  let traceString = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === elToCheck && !traceString) {
      traceString += `from ${i}`;
    }
    if (arr[i + 1] !== arr[i] && traceString) {
      traceString += ` to ${i}`;
      console.log(traceString);
      traceString = "";
    }
  }
}

export function minFlipsBest(arr) {
  // [1,1,0,0,0,1]
  let str = "";
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] !== arr[0]) {
        str = str + `from ${i}`;
      } else {
        console.log(str + ` to ${i - 1}`);
        str = "";
      }
    }
  }
  if (arr[0] !== arr[arr.length - 1]) {
    console.log(str + ` to ${arr.length - 1}`);
  }
}
