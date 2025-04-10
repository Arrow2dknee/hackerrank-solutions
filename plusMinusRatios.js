function getNumberStringWithSixDecimalPlaces(num) {
  return Number(num).toFixed(6);
}

function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zeroCount = 0;
  const arrLength = arr.length;

  arr.forEach((element, index) => {
    if (element === 0) {
      ++zeroCount;
      return;
    }
    if (element < 0) {
      ++negative;
    } else if (element > 0) {
      ++positive;
    }
  });

  return `${getNumberStringWithSixDecimalPlaces(
    positive / arrLength
  )}\n${getNumberStringWithSixDecimalPlaces(
    negative / arrLength
  )}\n${getNumberStringWithSixDecimalPlaces(zeroCount / arrLength)}`;
}

console.log(plusMinus([1, 1, 0, -1, -1]));
