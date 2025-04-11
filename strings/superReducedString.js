function superReducedString(s) {
  // Write your code here
  if (!s || !s.length) {
    return;
  }

  let i = 0;
  let givenString = s.toLowerCase().split("");
  do {
    if (givenString[i] === givenString[i + 1]) {
      givenString.splice(i, 2);
      i = 0;
    } else {
      ++i;
    }
  } while (i < givenString.length);
  return givenString.length == 0 ? "Empty String" : givenString.join("");
}

superReducedString("aaabccddd");
