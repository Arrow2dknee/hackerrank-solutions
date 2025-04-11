function birthdayCakeCandles(candles) {
  // Write your code here
  if (!Array.isArray(candles)) {
    return;
  }

  let maxCount = 0,
    max = 0;
  for (let i = 0; i < candles.length; ++i) {
    if (candles[i] > max) {
      max = candles[i];
      maxCount = 1;
    } else if (candles[i] === max) {
      maxCount += 1;
    }
  }
  return maxCount;
}

birthdayCakeCandles([4, 4, 1, 3, 9]);
