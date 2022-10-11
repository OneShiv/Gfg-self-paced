export function getFrequenciesSortedArray(arr) {
  let val = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (val !== arr[i]) {
      console.log(val, count);
      val = arr[i];
      count = 1;
    } else {
      count++;
    }
  }
  console.log(val, count);
}

function getFrequenciesArray(arr) {
  let mapper = {};
  for (let i = 0; i < arr.length; i++) {
    if (!mapper[arr[i]]) {
      mapper[arr[i]] = 1;
    } else {
      mapper[arr[i]]++;
    }
  }
  for (let key in mapper) {
    console.log(`${key}: ${mapper[key]}`);
  }
}
