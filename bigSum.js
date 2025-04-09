function aVeryBigSum(ar) {
  const bigIntArray = ar.map((e) => BigInt(e));

  return bigIntArray.reduce(
    (acc, currentValue, currentIndex) => acc + currentValue
  );
}

const result = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 100000000,
]);
console.log("Result =>", result);
