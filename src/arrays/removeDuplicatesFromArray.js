export function removeDuplicatesFromArray(arr) {
  const mapper = {};
  let lastKnownUniqueIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!mapper[arr[i]]) {
      mapper[arr[i]] = 1;
      arr[lastKnownUniqueIndex] = arr[i];
      lastKnownUniqueIndex++;
    } else {
      arr[i] = null;
    }
  }
  for (let j = lastKnownUniqueIndex + 1; j < arr.length; j++) {
    arr[j] = null;
  }
  console.log(arr);
  return lastKnownUniqueIndex;
}
