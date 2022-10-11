// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/arrays/arrangeAlternative.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrangeAlternative = arrangeAlternative;
function arrangeAlternative(arr) {
  var n = arr.length;
  var minArr = [];
  var maxArr = [];
  var start = 0,
    end = n - 1;
  while (start < end) {
    minArr.push(arr[start]);
    maxArr.push(arr[end]);
    start++;
    end--;
  }
  if (arr.length % 2 === 1) {
    minArr[start] = arr[start];
  }
  var i = 0;
  var j = 0;
  while (i < minArr.length && j < maxArr.length) {
    arr[2 * i] = maxArr[j];
    arr[2 * i + 1] = minArr[j];
    i++;
    j++;
  }
  var otherStart = 2 * i;
  while (i < maxArr.length) {
    arr[otherStart] = maxArr[i];
    otherStart++;
    i++;
  }
  while (j < minArr.length) {
    arr[otherStart] = minArr[j];
    otherStart++;
    j++;
  }
  return arr;
}
},{}],"src/arrays/checkRotatedAndSorted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRotatedAndSorted = checkRotatedAndSorted;
function checkRotatedAndSorted(arr, N) {
  // 3,4,1,2
  var flag = "";
  var pivot;
  for (var i = 1; i < N; i++) {
    if (arr[(i + 1) % N] <= arr[i] && arr[i - 1] <= arr[i]) {
      pivot = i;
      flag = "inc";
      break;
    }
  }
  console.log("pivot after inc", pivot);
  if (!pivot) {
    for (var _i = 1; _i < N; _i++) {
      if (arr[(_i + 1) % N] >= arr[_i] && arr[_i - 1] >= arr[_i]) {
        pivot = _i;
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
    var _i2;
    var _flag = true;
    for (_i2 = 0; _i2 < pivot; _i2++) {
      if (arr[_i2] < arr[_i2 + 1]) flag = flag && true;else {
        flag = flag && false;
      }
    }
    for (_i2 = _i2 + 1; _i2 < N - 1; _i2++) {
      if (arr[_i2] > arr[_i2 + 1]) flag = flag && true;else {
        flag = flag && false;
      }
    }
    return _flag;
  } else {
    var _i3;
    var _flag2 = true;
    for (_i3 = 0; _i3 < pivot; _i3++) {
      if (arr[_i3] > arr[_i3 + 1]) flag = flag && true;else {
        flag = flag && false;
      }
    }
    for (_i3 = _i3 + 1; _i3 < N - 1; _i3++) {
      if (arr[_i3] > arr[_i3 + 1]) flag = flag && true;else {
        flag = flag && false;
      }
    }
    return _flag2;
  }
}
},{}],"src/arrays/consecutiveOnes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConsecutiveOnes = getConsecutiveOnes;
function getConsecutiveOnes(arr) {
  // binary array
  // eg [0,1,0,1,1,0,1,1,1,1,0,1] o/p 4
  var count = arr[0] === 1 ? 1 : 0;
  var max = arr[0] === 1 ? 1 : 0;
  for (var i = 1; i < arr.length; i++) {
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
},{}],"src/arrays/frequenciesOfElementsArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFrequenciesSortedArray = getFrequenciesSortedArray;
function getFrequenciesSortedArray(arr) {
  var val = arr[0];
  var count = 1;
  for (var i = 1; i < arr.length; i++) {
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
  var mapper = {};
  for (var i = 0; i < arr.length; i++) {
    if (!mapper[arr[i]]) {
      mapper[arr[i]] = 1;
    } else {
      mapper[arr[i]]++;
    }
  }
  for (var key in mapper) {
    console.log("".concat(key, ": ").concat(mapper[key]));
  }
}
},{}],"src/arrays/isArraySorted.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSortedArray = isSortedArray;
function isSortedArray(arr) {
  var flag = true;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      flag = false;
      break;
    }
  }
  return flag;
}
},{}],"src/arrays/largestElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLargestElement = getLargestElement;
function getLargestElement(arr) {
  var max = -Infinity;
  var index = -1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      index = i;
    }
  }
  return index;
}
},{}],"src/arrays/leadersInArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLeadersInArray = getLeadersInArray;
function getLeadersInArray(arr) {
  var leaders = [];
  if (arr.length === 1) {
    leaders.push(arr[0]);
    return leaders;
  }
  var max = arr[arr.length - 1];
  for (var i = arr.length - 2; i >= 0; i--) {
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
},{}],"src/arrays/leftRotateArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leftRotateArray = leftRotateArray;
exports.naiveLeftRotateArray = naiveLeftRotateArray;
function leftRotateArray(arr, k) {
  k = k % arr.length;
  reverseArray(arr, 0, k - 1);
  reverseArray(arr, k, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr;
}
function reverseArray(arr, start, end) {
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}
function naiveLeftRotateArray(arr, k) {
  for (var i = 0; i < k; i++) {
    var temp = arr[0];
    for (var j = 1; j < arr.length; j++) {
      arr[j - 1] = arr[j];
    }
    arr[arr.length - 1] = temp;
  }
  return arr;
}
},{}],"src/arrays/longestOddEvenSubArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longestOddEvenSubarray = longestOddEvenSubarray;
function longestOddEvenSubarray(arr) {
  // [10,12,14,7,8]
  var length = 1;
  var start = arr[0] % 2;
  for (var i = 1; i < arr.length; i++) {
    var mod = arr[i] % 2;
    if (start !== mod) {
      length = Math.max(length, length + 1);
    } else {
      length = 1;
    }
    start = mod;
  }
  return length;
}
},{}],"src/arrays/maximumDifference.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.improvedMaximumDiff = improvedMaximumDiff;
exports.maximumDifferenceWithOrder = maximumDifferenceWithOrder;
function maximumDifferenceWithOrder(arr) {
  var overAllmax = -99999;
  var index1 = 0;
  var index2 = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    var instantMax = -99999;
    for (var j = i + 1; j < arr.length; j++) {
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
function improvedMaximumDiff(arr) {
  var pointer = 0;
  var min = arr[0];
  var res = -99999;
  for (var i = 1; i < arr.length; i++) {
    var diff = arr[i] - arr[pointer];
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
},{}],"src/arrays/maxIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxIndexDiff = maxIndexDiff;
function maxIndexDiff(arr, N) {
  // i/o : [34, 8, 10, 3, 2, 80, 30, 33, 1]
  var minArr = [];
  var maxArr = [];
  minArr[0] = arr[0];
  maxArr[arr.length - 1] = arr[arr.length - 1];
  for (var i = 1; i < arr.length; i++) {
    minArr[i] = Math.min(minArr[i - 1], arr[i]);
  }
  for (var _i = arr.length - 2; _i >= 0; _i--) {
    maxArr[_i] = Math.max(arr[_i], maxArr[_i + 1]);
  }
  var start = 0;
  var end = arr.length - 1;
  while (start < end) {
    console.log(arr[start], arr[end]);
    if (minArr[start] <= maxArr[end]) {
      break;
    } else {
      if (minArr[start] !== minArr[start + 1]) {
        start++;
      } else if (maxArr[end - 1] !== maxArr[end]) {
        end--;
      }
    }
  }
  console.log(arr[start], arr[end]);
  return end - start;
}
},{}],"src/arrays/maxOccuredINRange.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxOccuredInRange = maxOccuredInRange;
function maxOccuredInRange(L, R, n) {
  var res = new Array(1000).fill(0);
  for (var i = 0; i < n; i++) {
    res[L[i]]++;
    res[R[i] + 1]--;
  }
  var max = res[0];
  var index = 0;
  for (var _i = 1; _i < res.length; _i++) {
    res[_i] += res[_i - 1];
    if (max < res[_i]) {
      max = res[_i];
      index = _i;
    }
  }
  return index;
}
},{}],"src/arrays/maxOddEven.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxEvenOdd = maxEvenOdd;
function maxEvenOdd(arr, N) {
  for (var _i = 0; _i < N; _i++) {
    arr[_i] = arr[_i] % 2;
  }
  var i = 0;
  var count;
  var max = -Infinity;
  while (i < N) {
    count = 0;
    while (arr[i] === 0 && i < N) {
      count++;
      i++;
    }
    max = Math.max(max, count);
    count = 0;
    while (arr[i] === 1 && i < N) {
      count++;
      i++;
    }
    max = Math.max(max, count);
  }
  return max;
}
},{}],"src/arrays/maxProfit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxPro = maxPro;
exports.maxProfitEfficient = maxProfitEfficient;
exports.maxProfitNaive = maxProfitNaive;
function maxProfitNaive(arr, start, end) {
  // [1,5,3,8,12]
  // base case
  if (end <= start) {
    return 0;
  }
  var profit = 0;
  for (var i = start; i < end; i++) {
    for (var j = i + 1; j <= end; j++) {
      if (arr[j] > arr[i]) {
        var currentProfit = arr[j] - arr[i] + maxProfitNaive(arr, start, i - 1) + maxProfitNaive(j + 1, end);
        profit = Math.max(currentProfit, profit);
      }
    }
  }
  return profit;
}
function maxProfitEfficient(arr) {
  var profit = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] > arr[i]) {
      profit = profit + (arr[i + 1] - arr[i]);
    }
  }
  return profit;
}
function maxPro(A, n) {
  var buySellArr = [];
  var buy, sell;
  if (A.length === 1) {
    return [];
  }
  var i = 0;
  while (i < n) {
    while (i < n - 1 && A[i + 1] <= A[i]) {
      i++;
    }
    if (i === n - 1) break;
    buy = i++;
    while (i < n && A[i] >= A[i - 1]) {
      i++;
    }
    sell = i - 1;
    buySellArr.push([buy, sell]);
    if (i === n - 1) break;
  }
  return buySellArr;
}
},{}],"src/arrays/maxSubArraSumSW.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxSumSubarraySizeK = maxSumSubarraySizeK;
function maxSumSubarraySizeK(arr, K) {
  // [1, 8, 30, -5, 20, 7]
  var maxSum = 0;
  var currentSum = 0;
  for (var i = 0; i < K; i++) {
    maxSum = maxSum + arr[i];
  }
  currentSum = maxSum;
  for (var _i = 1; _i <= arr.length - K; _i++) {
    currentSum = currentSum - arr[_i - 1] + arr[_i + K - 1];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
},{}],"src/arrays/maxSubArraySumCircular.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMaxSubrraySumCircEfficient = getMaxSubrraySumCircEfficient;
exports.getSum = getSum;
exports.maxSubArraySumCircularNaive = maxSubArraySumCircularNaive;
exports.maxSubArraySumKadanes = maxSubArraySumKadanes;
exports.minSubArraySumKadanes = minSubArraySumKadanes;
function maxSubArraySumCircularNaive(arr) {
  var N = arr.length;
  var res = arr[0];
  for (var i = 0; i < arr.length; i++) {
    var current_sum = arr[i];
    var current_max = arr[i];
    // [5,-2,3,4]
    for (var j = 1; j < arr.length; j++) {
      var index = (i + j) % N;
      current_sum = current_sum + arr[index];
      current_max = Math.max(current_max, current_sum);
    }
    res = Math.max(current_max, res);
  }
  return res;
}

// idea for best solution is
// a0 a1 a2 ....ai) .""""""...(aj ....an-1
// .               this in between is the min SubArray Sum
// get maxSubArray using kadane's algo and tfrom sum of all subtract min Subarray sum

function minSubArraySumKadanes(arr) {
  var sum = arr[0];
  var res = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i] + sum, arr[i]);
    res = Math.min(res, sum);
  }
  return res;
}
function maxSubArraySumKadanes(arr) {
  var sum = arr[0];
  var res = arr[0];
  for (var i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i] + sum, arr[i]);
    res = Math.max(res, sum);
  }
  return res;
}
function getSum(arr) {
  return arr.reduce(function (acc, el) {
    return acc + el;
  }, 0);
}
function getMaxSubrraySumCircEfficient(arr) {
  var res = maxSubArraySumKadanes(arr);
  // imp condition
  if (res < 0) {
    return res;
  }
  return Math.max(res, getSum(arr) - minSubArraySumKadanes(arr));
}
},{}],"src/arrays/maxumumSubArraySum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxSubArraySumEfficientKadanes = maxSubArraySumEfficientKadanes;
exports.maxSubArraySumNaive = maxSubArraySumNaive;
exports.minSubArraySumEfficientKadanes = minSubArraySumEfficientKadanes;
function maxSubArraySumNaive(arr) {
  var overallSum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    var curr = 0;
    for (var j = i; j < arr.length; j++) {
      curr += arr[j];
      overallSum = Math.max(curr, overallSum);
    }
  }
  return overallSum;
}
function maxSubArraySumEfficientKadanes(arr) {
  var maxEnding = arr[0];
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    maxEnding = Math.max(arr[i] + maxEnding, arr[i]);
    max = Math.max(max, maxEnding);
  }
  return max;
}
function minSubArraySumEfficientKadanes(arr) {
  var minEnding = arr[0];
  var min = arr[0];
  for (var i = 1; i < arr.length; i++) {
    minEnding = Math.min(arr[i] + minEnding, arr[i]);
    min = Math.min(min, minEnding);
  }
  return min;
}
},{}],"src/arrays/minAdjacentDiffCirc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minAdjacentDiff = minAdjacentDiff;
function minAdjacentDiff(arr) {
  var min = Infinity;
  var N = arr.length;
  for (var i = 0; i < N; i++) {
    var curr = Math.abs(arr[i] - arr[(i + 1) % N]);
    min = Math.min(curr, min);
  }
  return min;
}
},{}],"src/arrays/minimumGroupFlips.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minFlips = minFlips;
exports.minFlipsBest = minFlipsBest;
function minFlips(arr) {
  // [1,1,0,0,0,1]
  var prev = arr[0];
  var zeroGroups = prev ? 0 : 1;
  var oneGroup = prev ? 1 : 0;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== prev) {
      if (arr[i]) {
        oneGroup++;
      } else {
        zeroGroups++;
      }
      prev = arr[i];
    }
  }
  var elToCheck = zeroGroups > oneGroup ? 1 : 0;
  var traceString = "";
  for (var _i = 0; _i < arr.length - 1; _i++) {
    if (arr[_i] === elToCheck && !traceString) {
      traceString += "from ".concat(_i);
    }
    if (arr[_i + 1] !== arr[_i] && traceString) {
      traceString += " to ".concat(_i);
      console.log(traceString);
      traceString = "";
    }
  }
}
function minFlipsBest(arr) {
  // [1,1,0,0,0,1]
  var str = "";
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] !== arr[0]) {
        str = str + "from ".concat(i);
      } else {
        console.log(str + " to ".concat(i - 1));
        str = "";
      }
    }
  }
  if (arr[0] !== arr[arr.length - 1]) {
    console.log(str + " to ".concat(arr.length - 1));
  }
}
},{}],"src/arrays/missingNumber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findMissing = findMissing;
exports.missingNumber = missingNumber;
function missingNumber(arr, n) {
  // [1,2,3,4,5]
  var start = arr.length - 1;
  var end = arr.length - 1;
  // [2, 3, -7, 6, 8, 1, -10, 15]
  for (end; end >= 0; end--) {
    if (arr[end] <= 0) {
      var temp = void 0;
      temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      // increment count of non-positive
      // integers
      start--;
    }
  }
  if (arr.length === end) {
    arr = [];
  } else {
    arr.length = start + 1;
  }
  for (var _i = 0; _i < arr.length; _i++) {
    var x = Math.abs(arr[_i]);
    if (x - 1 < arr.length && arr[x - 1] > 0) {
      arr[x - 1] = -arr[x - 1];
    }
  }
  var i;
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] >= 0) {
      return i + 1;
    }
  }
  return arr.length + 1;
}
function segregate(arr, size) {
  var j = 0,
    i;
  for (i = 0; i < size; i++) {
    if (arr[i] <= 0) {
      var temp = void 0;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      // increment count of non-positive
      // integers
      j++;
    }
  }
  return j;
}

/* Find the smallest positive missing
       number in an array that contains
       all positive integers */
function findMissingPositive(arr, size) {
  var i;

  // Mark arr[i] as visited by making
  // arr[arr[i] - 1] negative. Note that
  // 1 is subtracted because index start
  // from 0 and positive numbers start from 1
  for (i = 0; i < size; i++) {
    var x = Math.abs(arr[i]);
    if (x - 1 < size && arr[x - 1] > 0) arr[x - 1] = -arr[x - 1];
  }

  // Return the first index value at which
  // is positive
  for (i = 0; i < size; i++) {
    if (arr[i] > 0) return i + 1;
  } // 1 is added because indexes
  // start from 0

  return size + 1;
}

/* Find the smallest positive missing
       number in an array that contains
       both positive and negative integers */
function findMissing(arr, size) {
  // First separate positive and
  // negative numbers
  var shift = segregate(arr, size);
  var arr2 = new Array(size - shift);
  var j = 0;
  for (var i = shift; i < size; i++) {
    arr2[j] = arr[i];
    j++;
  }
  console.log(arr2);

  // Shift the array and call
  // findMissingPositive for
  // positive part
  return findMissingPositive(arr2, j);
}
},{}],"src/arrays/moveAllZerosToEnd.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveAllZerosToEnd = moveAllZerosToEnd;
function moveAllZerosToEnd(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      var temp = arr[i];
      arr[i] = arr[count];
      arr[count] = temp;
      count++;
    }
  }
  return arr;
}
},{}],"src/arrays/removeDuplicatesFromArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDuplicatesFromArray = removeDuplicatesFromArray;
function removeDuplicatesFromArray(arr) {
  var mapper = {};
  var lastKnownUniqueIndex = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!mapper[arr[i]]) {
      mapper[arr[i]] = 1;
      arr[lastKnownUniqueIndex] = arr[i];
      lastKnownUniqueIndex++;
    } else {
      arr[i] = null;
    }
  }
  for (var j = lastKnownUniqueIndex + 1; j < arr.length; j++) {
    arr[j] = null;
  }
  console.log(arr);
  return lastKnownUniqueIndex;
}
},{}],"src/arrays/reverseArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reverseArray = reverseArray;
function reverseArray(arr) {
  var start = 0;
  var last = arr.length - 1;
  while (start < last) {
    var temp = arr[start];
    arr[start] = arr[last];
    arr[last] = temp;
    start++;
    last--;
  }
  return arr;
}
},{}],"src/arrays/secondLargestElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.secondLargestEl = secondLargestEl;
function secondLargestEl(arr) {
  var max = arr[0];
  var secondMax = arr[1];
  var index = max > secondMax ? 0 : 1;
  var secondMaxIndex = max > secondMax ? 1 : 0;
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
      secondMaxIndex = index;
      index = i;
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMaxIndex = i;
      secondMax = arr[i];
    }
  }
  if (max === secondMax) {
    return -1;
  }
  return secondMaxIndex;
}
},{}],"src/arrays/subArrayWithGIvenSum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubArrayWithGivenSum = getSubArrayWithGivenSum;
exports.subArrayWithGivenSum = subArrayWithGivenSum;
function subArrayWithGivenSum(arr, sum) {
  for (var i = 1; i <= arr.length; i++) {
    if (maxSumSubarraySizeK(arr, i) === sum) {
      return true;
    }
  }
  return false;
}
function maxSumSubarraySizeK(arr, K) {
  // [1, 8, 30, -5, 20, 7]
  var maxSum = 0;
  var currentSum = 0;
  for (var i = 0; i < K; i++) {
    maxSum = maxSum + arr[i];
  }
  currentSum = maxSum;
  for (var _i = 1; _i <= arr.length - K; _i++) {
    currentSum = currentSum - arr[_i - 1] + arr[_i + K - 1];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

// above solution if O(n^2)

function getSubArrayWithGivenSum(arr, givenSum) {
  var startIndex = 0;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > givenSum) {
      sum = sum - arr[startIndex];
      startIndex++;
    }
    if (sum === givenSum) {
      return true;
    }
  }
  return false;
}
},{}],"src/arrays/tappingRainWater.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rainwaterTrappingGfg = rainwaterTrappingGfg;
exports.tappingRainWater = tappingRainWater;
function tappingRainWater(arr) {
  var lmax = null;
  var rmax = null;
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1] && lmax === null) {
      lmax = i;
    }
    if (arr[i] < arr[i + 1] && lmax !== null) {
      rmax = i + 1;
    }
  }
  var min = Math.min(arr[lmax], arr[rmax]);
  var water = 0;
  for (var j = lmax; j < rmax; j++) {
    water = water + (min - arr[j]);
  }
  return Math.abs(water);
}
function rainwaterTrappingGfg(arr) {
  // idea is bars on side won't store anything
  // we pre compute lma and rmax
  // lmax we traverse from left to right and
  // for rmax we traverse from right to left
  var lmax = [];
  var rmax = [];
  lmax[0] = arr[0];
  for (var i = 1; i < arr.length; i++) {
    lmax[i] = Math.max(arr[i], lmax[i - 1]);
  }
  rmax[arr.length - 1] = arr[arr.length - 1];
  for (var _i = arr.length - 2; _i >= 0; _i--) {
    rmax[_i] = Math.max(arr[_i], rmax[_i + 1]);
  }
  var water = 0;
  for (var _i2 = 1; _i2 < arr.length - 1; _i2++) {
    water = water + (Math.min(lmax[_i2], rmax[_i2]) - arr[_i2]);
  }
  return water;
}
},{}],"src/arrays/waveFormation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waveFormation = waveFormation;
function waveFormation(arr) {
  // [1,2,3,4,5] , 5
  for (var i = 0; i + 2 < arr.length; i = i + 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
},{}],"src/arrays/index.js":[function(require,module,exports) {
"use strict";

var _arrangeAlternative = require("./arrangeAlternative");
var _checkRotatedAndSorted = require("./checkRotatedAndSorted");
var _consecutiveOnes = require("./consecutiveOnes");
var _frequenciesOfElementsArray = require("./frequenciesOfElementsArray");
var _isArraySorted = require("./isArraySorted");
var _largestElement = require("./largestElement");
var _leadersInArray = require("./leadersInArray");
var _leftRotateArray = require("./leftRotateArray");
var _longestOddEvenSubArray = require("./longestOddEvenSubArray");
var _maximumDifference = require("./maximumDifference");
var _maxIndex = require("./maxIndex");
var _maxOccuredINRange = require("./maxOccuredINRange");
var _maxOddEven = require("./maxOddEven");
var _maxProfit = require("./maxProfit");
var _maxSubArraSumSW = require("./maxSubArraSumSW");
var _maxSubArraySumCircular = require("./maxSubArraySumCircular");
var _maxumumSubArraySum = require("./maxumumSubArraySum");
var _minAdjacentDiffCirc = require("./minAdjacentDiffCirc");
var _minimumGroupFlips = require("./minimumGroupFlips");
var _missingNumber = require("./missingNumber");
var _moveAllZerosToEnd = require("./moveAllZerosToEnd");
var _removeDuplicatesFromArray = require("./removeDuplicatesFromArray");
var _reverseArray = require("./reverseArray");
var _secondLargestElement = require("./secondLargestElement");
var _subArrayWithGIvenSum = require("./subArrayWithGIvenSum");
var _tappingRainWater = require("./tappingRainWater");
var _waveFormation = require("./waveFormation");
},{"./arrangeAlternative":"src/arrays/arrangeAlternative.js","./checkRotatedAndSorted":"src/arrays/checkRotatedAndSorted.js","./consecutiveOnes":"src/arrays/consecutiveOnes.js","./frequenciesOfElementsArray":"src/arrays/frequenciesOfElementsArray.js","./isArraySorted":"src/arrays/isArraySorted.js","./largestElement":"src/arrays/largestElement.js","./leadersInArray":"src/arrays/leadersInArray.js","./leftRotateArray":"src/arrays/leftRotateArray.js","./longestOddEvenSubArray":"src/arrays/longestOddEvenSubArray.js","./maximumDifference":"src/arrays/maximumDifference.js","./maxIndex":"src/arrays/maxIndex.js","./maxOccuredINRange":"src/arrays/maxOccuredINRange.js","./maxOddEven":"src/arrays/maxOddEven.js","./maxProfit":"src/arrays/maxProfit.js","./maxSubArraSumSW":"src/arrays/maxSubArraSumSW.js","./maxSubArraySumCircular":"src/arrays/maxSubArraySumCircular.js","./maxumumSubArraySum":"src/arrays/maxumumSubArraySum.js","./minAdjacentDiffCirc":"src/arrays/minAdjacentDiffCirc.js","./minimumGroupFlips":"src/arrays/minimumGroupFlips.js","./missingNumber":"src/arrays/missingNumber.js","./moveAllZerosToEnd":"src/arrays/moveAllZerosToEnd.js","./removeDuplicatesFromArray":"src/arrays/removeDuplicatesFromArray.js","./reverseArray":"src/arrays/reverseArray.js","./secondLargestElement":"src/arrays/secondLargestElement.js","./subArrayWithGIvenSum":"src/arrays/subArrayWithGIvenSum.js","./tappingRainWater":"src/arrays/tappingRainWater.js","./waveFormation":"src/arrays/waveFormation.js"}],"src/searching/binarySearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bsRecurrsive = exports.bsIterative = void 0;
var bsIterative = function bsIterative(arr, el) {
  var index = -1;
  var start = 0;
  var end = arr.length;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === el) {
      return mid;
    } else if (el < arr[mid]) {
      end = mid - 1;
    } else if (el > arr[mid]) {
      start = mid + 1;
    }
  }
  return index;
};
exports.bsIterative = bsIterative;
var bsRecurrsive = function bsRecurrsive(arr, el, start, end) {
  if (start > end) {
    return -1;
  }
  var mid = Math.floor((start + end) / 2);
  if (arr[mid] === el) {
    return mid;
  }
  if (el > arr[mid]) {
    return bsRecurrsive(arr, el, mid + 1, end);
  } else {
    return bsRecurrsive(arr, el, start, mid - 1);
  }
};
exports.bsRecurrsive = bsRecurrsive;
},{}],"src/searching/bsoccurence.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastOccurence = exports.firstOccurence = exports.countOccurencesInSortedArray = void 0;
var firstOccurence = function firstOccurence(arr, low, high, x) {
  var mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  }
  if (arr[mid] === x) {
    if (mid === 0 || arr[mid] !== arr[mid - 1]) {
      return mid;
    } else {
      return firstOccurence(arr, low, mid - 1, x);
    }
  }
  if (x > arr[mid]) {
    return firstOccurence(arr, mid + 1, high, x);
  } else {
    return firstOccurence(arr, low, mid - 1, x);
  }
};
exports.firstOccurence = firstOccurence;
var lastOccurence = function lastOccurence(arr, low, high, x) {
  var mid = Math.floor((low + high) / 2);
  if (low > high) {
    return -1;
  }
  if (arr[mid] === x) {
    if (mid === arr.length - 1 || arr[mid] !== arr[mid + 1]) {
      return mid;
    } else {
      return lastOccurence(arr, mid + 1, high, x);
    }
  }
  if (x > arr[mid]) {
    return lastOccurence(arr, mid + 1, high, x);
  } else {
    return lastOccurence(arr, low, mid - 1, x);
  }
};
exports.lastOccurence = lastOccurence;
var countOccurencesInSortedArray = function countOccurencesInSortedArray(arr, x) {
  var firstOccurenceIndex = firstOccurence(arr, 0, arr.length - 1, x);
  var lastOccurenceIndex = lastOccurence(arr, 0, arr.length - 1, x);
  if (firstOccurenceIndex === -1 || lastOccurenceIndex === -1) {
    return 0;
  } else {
    return lastOccurenceIndex - firstOccurenceIndex + 1;
  }
};
exports.countOccurencesInSortedArray = countOccurencesInSortedArray;
},{}],"src/searching/countOnes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countNoOfOnesInBinarySortedArray = void 0;
var _bsoccurence = require("./bsoccurence");
var countNoOfOnesInBinarySortedArray = function countNoOfOnesInBinarySortedArray(arr) {
  var firstIndex = (0, _bsoccurence.firstOccurence)(arr, 0, arr.length - 1, 1);
  if (firstIndex === -1) {
    return 0;
  }
  return arr.length - firstIndex;
};
exports.countNoOfOnesInBinarySortedArray = countNoOfOnesInBinarySortedArray;
},{"./bsoccurence":"src/searching/bsoccurence.js"}],"src/searching/infiniteSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchNumberInInfiniteArray = void 0;
var _binarySearch = require("./binarySearch");
var searchNumberInInfiniteArray = function searchNumberInInfiniteArray(arr, N) {
  if (arr[0] === N) {
    return 0;
  }
  var i = 1;
  while (arr[i * 2] <= N) {
    i = i * 2;
    console.log(i);
  }
  console.log(i);
  return (0, _binarySearch.bsRecurrsive)(arr, N, i, i * 2);
};
exports.searchNumberInInfiniteArray = searchNumberInInfiniteArray;
},{"./binarySearch":"src/searching/binarySearch.js"}],"src/searching/isPairSum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPair = void 0;
// to check if there is pair satisfying sum
// given that we have a sorted array

var isPair = function isPair(arr, sum) {
  var ptr1 = 0;
  var ptr2 = arr.length - 1;
  while (ptr1 < ptr2) {
    var curr_sum = arr[ptr1] + arr[ptr2];
    if (curr_sum === sum) {
      return true;
    }
    if (curr_sum > sum) {
      ptr2--;
    } else {
      ptr1++;
    }
  }
  return false;
};
exports.isPair = isPair;
},{}],"src/searching/medianTwoSortedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.medianOfTwoSortedArrays = void 0;
var medianOfTwoSortedArrays = function medianOfTwoSortedArrays(a1, a2) {
  // first thing is a1 length < a2
  // or else swap
  if (a1.length > a2.length) {
    var temp = a1;
    a1 = a2;
    a2 = temp;
  }

  // idea is finding of i1 and i2 from where we can take
  // calculation such that left side entire less than right side

  var low = 0,
    high = a1.length;
  while (low <= high) {
    var i1 = Math.floor((low + high) / 2);
    var i2 = Math.floor((high + a2.length + 1) / 2) - i1;
    var minRight1 = i1 === high ? Infinity : a1[i1];
    var maxLeft1 = i1 === 0 ? -Infinity : a1[i1 - 1];
    var minRight2 = a2[i2];
    var maxLeft2 = a2[i2 - 1];
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if ((a1.length + a2.length) % 2 === 0) {
        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft2 > minRight1) {
      low = i1 + 1;
    } else {
      high = i1 - 1;
    }
  }
};
exports.medianOfTwoSortedArrays = medianOfTwoSortedArrays;
},{}],"src/searching/minPages.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minPagesEfficient = exports.minPages = void 0;
var minPages = function minPages(arr, N, K) {
  if (K === 1) {
    return sum(arr, 0, N - 1);
  }
  if (N === 1) {
    return arr[0];
  }
  var res = Infinity;
  for (var i = 1; i < N; i++) {
    res = Math.min(res, Math.max(minPages(arr, i, K - 1), sum(arr, i, N - 1)));
  }
};
exports.minPages = minPages;
var sum = function sum(arr, start, end) {
  var sum = 0;
  for (var i = start; i <= end; i++) {
    sum += arr[i];
  }
  return sum;
};
var maxInArray = function maxInArray(arr) {
  var max = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
};
var minPagesEfficient = function minPagesEfficient(arr, N, K) {
  // first find max by one student if only 1 student
  // also find max by student if multiple student
  var high = sum(arr, 0, N - 1);
  var low = maxInArray(arr);
  console.log(low, high);
  var res = Infinity;
  // range lies between both
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    var noOfStudent = 1;
    var _sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (_sum + arr[i] <= mid) {
        _sum = _sum + arr[i];
      } else {
        _sum = arr[i];
        noOfStudent++;
      }
    }
    if (noOfStudent <= K) {
      res = Math.min(res, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return res;
};
exports.minPagesEfficient = minPagesEfficient;
},{}],"src/searching/peakElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.peakElement = void 0;
// so basically naive approach is O(N)
// Unique case where we can use binary search on unsorted array
// idea behind is simple
// [10] : peak 10 [10,20] peak 20 , so any independent array has a pek element always

// we will check if mid id peak if not check which side is peak and move on that side

var peakElement = function peakElement(arr) {
  var start = 0,
    end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if ((mid === 0 || arr[mid] >= arr[mid - 1]) && (mid === arr.length - 1 || arr[mid] >= arr[mid + 1])) {
      return arr[mid];
    }
    if (arr[mid + 1] > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};
exports.peakElement = peakElement;
},{}],"src/searching/repeatingElement.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatingElement = void 0;
var repeatingElement = function repeatingElement(arr) {
  // rules
  // 1) starts with 0 and till N elements
  // max in array element will be N-2 , if from 1 then till N-1
  // lots of methods
  // O(n^2), even extra array and O(N) etc etc

  // we are using fast and slow pointer approach as we
  // use to find loop in linked list

  var slow = arr[0] + 1;
  var fast = arr[0] + 1;
  // in first we know there is loop
  // let it go till position where they meet
  do {
    slow = arr[slow] + 1;
    fast = arr[arr[fast] + 1] + 1;
  } while (slow !== fast);
  slow = arr[0] + 1;
  while (slow !== fast) {
    slow = arr[slow] + 1;
    fast = arr[fast] + 1;
  }
  return slow - 1;
};
exports.repeatingElement = repeatingElement;
},{}],"src/searching/searchInSortedAndRotatedArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchSortedRotated = void 0;
var searchSortedRotated = function searchSortedRotated(arr, N) {
  var start = 0;
  var end = arr.length - 1;

  // determine to go left or right
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] === N) {
      return mid;
    }
    // [10,20,40,60,5,8] 5 mid 40
    // [100,200,300,40,60,80,90] 30 , 200 mid 40
    // [400,500,10,50,90]
    if (arr[start] < arr[mid]) {
      if (N >= arr[start] && N < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (N > arr[mid] && N <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
exports.searchSortedRotated = searchSortedRotated;
},{}],"src/searching/squareRoot.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.squareRoot = exports.sqaureRootEfficient = void 0;
var squareRoot = function squareRoot(N) {
  if (N < 0) {
    return "Imaginary";
  }
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  var i = 2;
  while (i * i <= N) {
    i++;
  }
  return i - 1;
};
exports.squareRoot = squareRoot;
var sqaureRootEfficient = function sqaureRootEfficient(N) {
  if (N < 0) {
    return "Imaginary";
  }
  if (N === 0) {
    return 0;
  }
  if (N === 1) {
    return 1;
  }
  var low = 2,
    high = N,
    ans = -1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (mid * mid === N) {
      return mid;
    }
    if (mid * mid > N) {
      high = mid - 1;
    } else {
      low = mid + 1;
      ans = mid;
    }
  }
  return ans;
};
exports.sqaureRootEfficient = sqaureRootEfficient;
},{}],"src/searching/triplet.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tirplet = void 0;
var tirplet = function tirplet(arr, N) {
  for (var i = 0; i < arr.length - 2; i++) {
    var x = N - arr[i];
    if (isPair(arr, x, i + 1, arr.length - 1)) {
      return true;
    }
  }
  return false;
};

// [2,5,10,15,18]   33
exports.tirplet = tirplet;
var isPair = function isPair(arr, remaining, start, end) {
  var ptr1 = start;
  var ptr2 = end;
  while (ptr1 < ptr2) {
    if (arr[ptr1] + arr[ptr2] === remaining) {
      return true;
    }
    if (arr[ptr1] + arr[ptr2] > remaining) {
      ptr2--;
    } else {
      ptr1++;
    }
  }
};
},{}],"src/searching/index.js":[function(require,module,exports) {
"use strict";

var _binarySearch = require("./binarySearch");
var _bsoccurence = require("./bsoccurence");
var _countOnes = require("./countOnes");
var _infiniteSearch = require("./infiniteSearch");
var _isPairSum = require("./isPairSum");
var _medianTwoSortedArray = require("./medianTwoSortedArray");
var _minPages = require("./minPages");
var _peakElement = require("./peakElement");
var _repeatingElement = require("./repeatingElement");
var _searchInSortedAndRotatedArray = require("./searchInSortedAndRotatedArray");
var _squareRoot = require("./squareRoot");
var _triplet = require("./triplet");
// console.log("------ Binary Search --------");
// console.log("----- * Iterative approach * ------");
// console.log("[1, 2, 3, 4, 5, 6], 5 = ", bsIterative([1, 2, 3, 4, 5, 6], 5));

// console.log("----- * Recurrsive approach * ------");
// console.log(
//   "[1, 2, 3, 4, 5, 6], 5 = ",
//   bsRecurrsive([1, 2, 3, 4, 5, 6], 5, 0, 5)
// );
// console.log(
//   "[1, 2, 3, 4, 5, 6], 25 =",
//   bsRecurrsive([1, 2, 3, 4, 5, 6], 25, 0, 5)
// );

// console.log("------- First occurence --------");
// console.log(
//   "[10, 10, 10, 15, 20, 20],10 = ",
//   firstOccurence([10, 10, 10, 15, 20, 20], 0, 5, 10)
// );
// console.log("------- last  occurence --------");
// console.log(
//   "[10, 10, 10, 15, 20, 20], 10",
//   lastOccurence([10, 10, 10, 15, 20, 20], 0, 5, 10)
// );

// console.log("------ no of occurences -----");
// console.log(
//   "[10, 10, 10, 15, 20, 20], 10",
//   countOccurencesInSortedArray([10, 10, 10, 15, 20, 20], 10)
// );

// console.log(
//   "[10, 10, 10, 15, 20, 20], 30",
//   countOccurencesInSortedArray([10, 10, 10, 15, 20, 20], 30)
// );

// console.log("----- count no of 1's in sorted binary array -----");
// console.log(
//   "[0,0,0,1,1,1,1]",
//   countNoOfOnesInBinarySortedArray([0, 0, 0, 1, 1, 1, 1])
// );

// console.log("[0,0,0]", countNoOfOnesInBinarySortedArray([0, 0, 0]));
// console.log("[1,1,1]", countNoOfOnesInBinarySortedArray([1, 1, 1]));

// console.log("------ square root of number ------");
// console.log("14 ->", squareRoot(14));
// console.log("25 ->", squareRoot(25));
// console.log("14", sqaureRootEfficient(14));

// console.log("---- search in InfiniteSize Array -----");
// console.log(
//   searchNumberInInfiniteArray(
//     [10, 20, 30, 40, 50, 100, 200, 400, 600, 1000, 1070],
//     100
//   )
// );

// console.log("---- Search number  sorted rotated Array ----");
// console.log(searchSortedRotated([9, 10, 11, 12, 1, 2], 2));
// // [12,1,3]
// console.log("---- peak element -----");
// console.log(peakElement([10, 30, 20, 35, 40, 60, 50]));

// console.log("---- is there pair with given sum sorted arr -----");
// console.log(isPair([1, 2, 3, 4, 5, 6], 25));

// console.log("----- triplet in sorted array ------");
// console.log("[2,5,10,15,18], 33", tirplet([2, 5, 10, 15, 18], 33));

console.log("---- Median of two sorted array ------");
console.log((0, _medianTwoSortedArray.medianOfTwoSortedArrays)([10, 20, 30], [5, 15, 25, 35, 45]));
console.log("----- repeating element ------");
console.log((0, _repeatingElement.repeatingElement)([0, 2, 1, 3, 5, 4, 6, 2]));
console.log("---- min pages ----");
console.log("[10, 20, 10, 30] for 2 students : ", (0, _minPages.minPagesEfficient)([10, 20, 10, 30], 4, 2));
},{"./binarySearch":"src/searching/binarySearch.js","./bsoccurence":"src/searching/bsoccurence.js","./countOnes":"src/searching/countOnes.js","./infiniteSearch":"src/searching/infiniteSearch.js","./isPairSum":"src/searching/isPairSum.js","./medianTwoSortedArray":"src/searching/medianTwoSortedArray.js","./minPages":"src/searching/minPages.js","./peakElement":"src/searching/peakElement.js","./repeatingElement":"src/searching/repeatingElement.js","./searchInSortedAndRotatedArray":"src/searching/searchInSortedAndRotatedArray.js","./squareRoot":"src/searching/squareRoot.js","./triplet":"src/searching/triplet.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./arrays");
require("./searching");
},{"./arrays":"src/arrays/index.js","./searching":"src/searching/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33015" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map