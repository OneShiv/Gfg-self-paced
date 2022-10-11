import { arrangeAlternative } from "./arrangeAlternative";
import { checkRotatedAndSorted } from "./checkRotatedAndSorted";
import { getConsecutiveOnes } from "./consecutiveOnes";
import { getFrequenciesSortedArray } from "./frequenciesOfElementsArray";
import { isSortedArray } from "./isArraySorted";
import { getLargestElement, largestElement } from "./largestElement";
import { getLeadersInArray } from "./leadersInArray";
import { leftRotateArray, naiveLeftRotateArray } from "./leftRotateArray";
import { longestOddEvenSubarray } from "./longestOddEvenSubArray";
import {
  improvedMaximumDiff,
  maximumDifferenceWithOrder
} from "./maximumDifference";
import { maxIndexDiff } from "./maxIndex";
import { maxOccuredInRange } from "./maxOccuredINRange";
import { maxEvenOdd } from "./maxOddEven";
import { maxPro, maxProfitEfficient, maxProfitNaive } from "./maxProfit";
import {
  maxSumSubarraySizeK,
  maxSubArraySumEfficient
} from "./maxSubArraSumSW";
import {
  getMaxSubrraySumCircEfficient,
  maxSubArrayKadanes,
  maxSubArraySumCircularNaive,
  minSubArrayKadanes
} from "./maxSubArraySumCircular";
import {
  maxSubArraySumEfficientKadanes,
  minSubArraySumEfficientKadanes
} from "./maxumumSubArraySum";
import { minAdjacentDiff } from "./minAdjacentDiffCirc";
import { minFlips, minFlipsBest } from "./minimumGroupFlips";
import { findMissing, missingNumber } from "./missingNumber";
import { moveAllZerosToEnd } from "./moveAllZerosToEnd";
import { removeDuplicatesFromArray } from "./removeDuplicatesFromArray";
import { reverseArray } from "./reverseArray";
import { secondLargestEl } from "./secondLargestElement";
import {
  getSubArrayWithGivenSum,
  subArrayWithGivenSum
} from "./subArrayWithGIvenSum";
import { rainwaterTrappingGfg, tappingRainWater } from "./tappingRainWater";
import { waveFormation } from "./waveFormation";

/*
console.log("P : get index of largest el in array or -1 if not found");
console.log(getLargestElement([4, 23, 33223, 23, 233, 895]));
console.log("---------------------");
console.log("P : get index of second largest el in array or -1 if not found");
console.log(secondLargestEl([4, 23, 33223, 23, 233, 895]));
console.log("---------------------");
console.log(
  "P : if array is sorted return true else false. Non decreasing order is imp ,equlas allowed"
);
console.log(isSortedArray([4, 23, 33223]));
console.log("---------------------");
console.log("P : reverse Array [1,2,3,4,9]");
console.log(reverseArray([1, 2, 3, 4, 9]));
console.log("---------------------");
console.log(
  "P : remove duplicates from array and return size [1,2,2,3,9,9,3,6,45,6]"
);
console.log(removeDuplicatesFromArray([1, 2, 2, 3, 9, 9, 3, 6, 45, 6]));
console.log("---------------------");
console.log("P : move zeros to end of aaray [3,0,6,0,5,7,8,0,23,0]");
console.log(moveAllZerosToEnd([3, 0, 6, 0, 5, 7, 8, 0, 23, 0]));

console.log("---------------------");
console.log("left rotate array by 1 [1,2,3,4,5]");
console.log(leftRotateArray([1, 2, 3, 4, 5], 4));

console.log("---------------------");
console.log("print leaders of array  []");
console.log(getLeadersInArray([10, 10, 10]));

console.log("---------------------");
console.log("max diff in order [2,3,10,6,4,8,1]");
console.log(improvedMaximumDiff([2, 3, 10, 6, 4, 8, 1]));

console.log("---------------------");
console.log("get frequencies sorted array [1,1,2,3,]");
console.log(getFrequenciesSortedArray([1, 2]));
*/

/*
console.log("---------------------");
console.log("max profit shares [1,5,3,8,12]");
console.log(maxProfitNaive([1, 5, 3, 8, 12], 0, 4));

console.log("---------------------");
console.log("max profit shares [9,2,5,1,13,6]");
console.log(maxProfitEfficient([9, 2, 5, 1, 13, 6]));

console.log("---------------------");
console.log("tapping rainwater [3, 0, 0, 2, 0, 4]");
console.log(
  "efficient , self innovation no aux space",
  tappingRainWater([3, 0, 0, 2, 0, 4])
);
console.log(
  "GFG way, Theeta N aux space",
  rainwaterTrappingGfg([3, 0, 0, 2, 0, 4])
);

console.log("---------------------");
console.log("get consecutive ones [0,1,0,1,1,0,1,1,1,1,0,1]");
console.log(getConsecutiveOnes([0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1]));
console.log("[0,0,0]", getConsecutiveOnes([0, 0, 0]));
console.log("[1,1,1]", getConsecutiveOnes([1, 1, 1]));

console.log("---------------------");
console.log(" max subarry sum [2,3,-8,7,-1,2,3]");
console.log(maxSubArraySumEfficient([2, 3, -8, 7, -1, 2, 3]));
console.log("---------------------");
console.log(" longest oddEven subarray [9, 10, 12, 14, 7, 8]");
console.log(longestOddEvenSubarray([9, 10, 12, 14, 7, 8]));

console.log("---------------------");
console.log("max sub Array sum circular");
console.log(maxSubArraySumCircularNaive([3, -4, 5, 6, -8, 7]));
console.log(
  "max sub array sum efficient " + getMaxSubrraySumCircEfficient([-5, -3])
);

*/

/*
console.log("-----CONSECUTIVE BINARY ----------");
console.log("minflips [1,1,0,0,0,1]");
console.log(minFlipsBest([1, 1, 0, 0, 0, 1]));

console.log("------ SLIDING WINDOW-----------");
console.log("max SubArraySum  [1,8,30,-5,20,7]");
console.log(maxSumSubarraySizeK([1, 8, 30, -5, 20, 7], 3));

console.log("------ SLIDING WINDOW max sub given sum-----------");
console.log("max SubArraySum  with given sum [1,4,20,3,10,5]");
console.log(subArrayWithGivenSum([1, 4, 20, 3, 10, 5], 33));
console.log(getSubArrayWithGivenSum([1, 4, 20, 3, 10, 5], 33));

console.log("---- left rotate by k places naive-----");
console.log(naiveLeftRotateArray([1, 2, 3, 4, 5], 2));
console.log("---- left rotate by k places best-----");
console.log(leftRotateArray([2, 4, 6, 8, 10, 12, 14, 16, 18, 20], 3));

console.log("------ min adjacent diff circular -------");
console.log(minAdjacentDiff([10, -3, -4, 7, 6, 5, -4, -1]));

*/
// console.log("------ prefix pattern ---------");
// console.log("Max occured in range");
// console.log(maxOccuredInRange([1, 4, 3, 1], [15, 8, 5, 4], 4));

// console.log(waveFormation([2, 4, 7, 8, 9, 10]));

// console.log("--------- missing number-----------");
// console.log(missingNumber([2, 3, -7, 6, 8, 1, -10, 15], 8));

// console.log("----------- alternative arranging------");
// console.log(arrangeAlternative([1, 2, 3, 4, 5, 6, 7]));

// console.log("----- maxIndex i<=j && a[i]<=a[j] max of j-i ------");
// console.log(maxIndexDiff([4, 3, 2, 1], 15));

// console.log("---- stock buy sell max profit-----");
// let arr = [100, 180, 260, 310, 40, 535, 695];
// let res = maxPro(arr, 7);
// console.log(res);
// let p = 0;
// for (let i = 0; i < res.length; i++) {
//   p += arr[res[i][1]] - arr[res[i][0]];
// }
// console.log(p);
// console.log("adsa");

// console.log(" ----- check sorted and rotated -------");
// console.log(checkRotatedAndSorted([10, 20, 30, 14], 4));

// console.log("------ max Odd even fsdscd --------");
// console.log(maxEvenOdd([1, 3, 5, 2, 4, 6, 8, 9, 11], 9));
// console.log(maxSubArraySumEfficientKadanes([8, -8, 9, -9, 10, -11, 12]));
// console.log(minSubArraySumEfficientKadanes([8, -8, 9, -9, 10, -11, 12]));

// function foo(n) {
//   let i = 0;
//   let A = [];
//   A[0] = n;
//   while (true) {
//     if (i !== 0 && A[i] === n) {
//       break;
//     }
//     if (A[i] > 0 && i >= 0) {
//       console.log("dasdas");
//       A[i + 1] = A[i] - 5;
//     } else {
//       console.log("---");
//       A[i + 1] = A[i] + 5;
//     }
//     i++;
//   }
//   console.log(A.join(" "));
//   return A;
// }

// console.log(foo(16));
