function possibleWords(a, N) {
  const keyPadMapping = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  const allCombs = [];
  let firstKeyPressed = a[0];
  let firstKeyPossibleChars = keyPadMapping[firstKeyPressed];
  let counter = 1;
  for (let j = 0; j < firstKeyPossibleChars.length; j++) {
    let str = firstKeyPossibleChars[j];
    getAllCombinations(str, a, N, keyPadMapping, allCombs, counter);
  }
}
function getAllCombinations(str, a, N, keyPadMapping, allCombs, counter) {
  // base case

  if (counter === N) {
    // do something
    allCombs.push(str);
    return;
  }
  let keyPressed = a[counter];

  let possibleChars = keyPadMapping[keyPressed];
  for (let j = 0; j < possibleChars.length; j++) {
    let jointStr = str + possibleChars[j];
    getAllCombinations(jointStr, a, N, keyPadMapping, allCombs, counter + 1);
  }
}

console.log(possibleWords([2, 3, 4], 3));
