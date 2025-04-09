function sumOfArrayElements(integerArray) {
  return integerArray.reduce(
    (accumulator, currentValue, currentIndex) => accumulator + currentValue,
    0
  );
}

const result = sumOfArrayElements([5, 10, 15]);
console.log("Result =>", result);
