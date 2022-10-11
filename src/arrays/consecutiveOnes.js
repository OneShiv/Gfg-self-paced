export function getConsecutiveOnes(arr) {
  // binary array
  // eg [0,1,0,1,1,0,1,1,1,1,0,1] o/p 4
  let count = arr[0] === 1 ? 1 : 0;
  let max = arr[0] === 1 ? 1 : 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === 0) {
      count = 0;
    }
    if (arr[i] === 1) {
      count++;
    }
    max = Math.max(count, max);
  }
  return max;
}
