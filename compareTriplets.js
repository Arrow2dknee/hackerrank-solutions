function compareTriplets(a, b) {
  let aScore = 0;
  let bScore = 0;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] > b[i]) {
      aScore += 1;
    } else if (a[i] < b[i]) {
      bScore += 1;
    }
  }

  return [aScore, bScore];
}

const result = compareTriplets([5, 6, 7], [3, 6, 10]);
console.log("Result =>", result);
