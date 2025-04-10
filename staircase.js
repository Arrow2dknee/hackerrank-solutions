function staircase(n) {
  // Write your code here
  const size = parseInt(n, 10);

  for (let i = 0; i < size; ++i) {
    let k = size - 1 - i;
    const stars = [];
    for (let j = 0; j < size && k <= size; ++j) {
      if (j < k) {
        stars.push(" ");
      } else if (k === j) {
        stars.push("#");
        ++k;
      }
    }
    console.log(stars.join(""));
  }
}

staircase(6);
