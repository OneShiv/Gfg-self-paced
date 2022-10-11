export function waveFormation(arr) {
  // [1,2,3,4,5] , 5
  for (let i = 0; i + 2 < arr.length; i = i + 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
