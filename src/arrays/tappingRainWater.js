export function tappingRainWater(arr) {
  let lmax = null;
  let rmax = null;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && lmax === null) {
      lmax = i;
    }
    if (arr[i] < arr[i + 1] && lmax !== null) {
      rmax = i + 1;
    }
  }

  let min = Math.min(arr[lmax], arr[rmax]);
  let water = 0;

  for (let j = lmax; j < rmax; j++) {
    water = water + (min - arr[j]);
  }
  return Math.abs(water);
}

export function rainwaterTrappingGfg(arr) {
  // idea is bars on side won't store anything
  // we pre compute lma and rmax
  // lmax we traverse from left to right and
  // for rmax we traverse from right to left
  const lmax = [];
  const rmax = [];
  lmax[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    lmax[i] = Math.max(arr[i], lmax[i - 1]);
  }
  rmax[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    rmax[i] = Math.max(arr[i], rmax[i + 1]);
  }
  let water = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    water = water + (Math.min(lmax[i], rmax[i]) - arr[i]);
  }
  return water;
}
