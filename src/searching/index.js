import { bsIterative, bsRecurrsive } from "./binarySearch";
import {
  countOccurencesInSortedArray,
  firstOccurence,
  lastOccurence
} from "./bsoccurence";
import { countNoOfOnesInBinarySortedArray } from "./countOnes";
import { searchNumberInInfiniteArray } from "./infiniteSearch";
import { isPair } from "./isPairSum";
import { medianOfTwoSortedArrays } from "./medianTwoSortedArray";
import { minPagesEfficient } from "./minPages";
import { peakElement } from "./peakElement";
import { repeatingElement } from "./repeatingElement";
import { searchSortedRotated } from "./searchInSortedAndRotatedArray";
import { sqaureRootEfficient, squareRoot } from "./squareRoot";
import { tirplet } from "./triplet";

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
console.log(medianOfTwoSortedArrays([10, 20, 30], [5, 15, 25, 35, 45]));

console.log("----- repeating element ------");
console.log(repeatingElement([0, 2, 1, 3, 5, 4, 6, 2]));

console.log("---- min pages ----");
console.log(
  "[10, 20, 10, 30] for 2 students : ",
  minPagesEfficient([10, 20, 10, 30], 4, 2)
);
