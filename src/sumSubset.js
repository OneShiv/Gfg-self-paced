export function sumSubset(numArray, sum, sizeOfArray, actualArray) {
  if (sizeOfArray === 0) {
    if (numArray.reduce((acc, el) => acc + el, 0) === sum) {
      return 1;
    }
    return 0;
  }
  let el = actualArray[sizeOfArray - 1];
  return (
    sumSubset([...numArray], sum, sizeOfArray - 1, actualArray) +
    sumSubset([...numArray, el], sum, sizeOfArray - 1, actualArray)
  );
}

export function betterSumSubset(numArray, sizeOfArray, sum) {
  if (sizeOfArray === 0) {
    return sum === 0 ? 1 : 0;
  }
  return (
    betterSumSubset(numArray, sizeOfArray - 1, sum) +
    betterSumSubset(numArray, sizeOfArray - 1, sum - numArray[sizeOfArray - 1])
  );
}
