function camelcase(s) {
  // Write your code here
  let wordCount = 1;
  const givenString = s.split("");

  givenString.forEach((s) => {
    if (s.toUpperCase() === s) {
      ++wordCount;
    }
  });

  return wordCount;
}

console.log(camelcase("littleRedRidingHood"));
