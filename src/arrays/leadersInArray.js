export function getLeadersInArray(arr) {
  let leaders = [];
  if (arr.length === 1) {
    leaders.push(arr[0]);
    return leaders;
  }
  let max = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    console.log("here", i, arr[i], max);
    if (arr[i] > max) {
      if (i + 1 === arr.length - 1) {
        leaders.push(arr[i + 1]);
      }
      leaders.push(arr[i]);
      max = arr[i];
    } else {
      if (i + 1 === arr.length - 1) {
        leaders.push(arr[i + 1]);
      }
    }
  }
  return leaders;
}
