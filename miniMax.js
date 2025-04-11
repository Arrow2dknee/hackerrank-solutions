function miniMaxSum(arr) {
  // Write your code here
  if (!Array.isArray(arr)) {
    return;
  }

  let min = 0,
    max = 0;
  for (let i = 0; i < arr.length; ++i) {
    let j = i + 1;
    if (i === arr.length - 1) {
      j = 0;
    }

    let sum = 0;

    console.log("i", i);
    for (; j !== i; ) {
      console.log("j", j);
      sum += arr[j];
      ++j;
      if (j === arr.length) {
        j = 0;
      }
    }
    console.log("sum", sum, "min", min, "max", max);
    if (min == 0) {
      min = sum;
    } else if (sum < min) {
      min = sum;
    }
    if (sum > max) {
      max = sum;
    }
  }

  console.log(`${min} ${max}`);
}

miniMaxSum([1, 3, 5, 7, 9]);
