function diagonalDifference(arr) {
  // Write your code here
  let leftToRightDiagonal = 0;
  let rightToLeftDiagonal = 0;
  let arrayIndex = 0;

  let startIndex = 0;
  let endIndex = arr.length - 1;

  // left to right diagonal calculation
  while (startIndex < arr.length) {
    const checkArray = arr[arrayIndex];
    leftToRightDiagonal += checkArray[startIndex];
    ++startIndex;
    ++arrayIndex;
  }

  arrayIndex = 0;
  // right to left diagonal calculation
  while (endIndex >= 0) {
    const checkArray = arr[arrayIndex];
    rightToLeftDiagonal += checkArray[endIndex];
    ++arrayIndex;
    --endIndex;
  }

  return Math.abs(leftToRightDiagonal - rightToLeftDiagonal);
}

const result = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
console.log("Result =>", result);
