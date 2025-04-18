/**
 * Write a function to sort a list of numbers using selection sort algorithm
 */
function SelectionSort(array) {
  if (!array || !Array.isArray(array)) {
    return null;
  }
  console.log("array", array);

  let minimum = 0;
  for (let i = 0; i < array.length - 1; ++i) {
    minimum = i;
    for (let j = i + 1; j < array.length; ++j) {
      if (array[minimum] > array[j]) {
        minimum = j;
      }
    }

    if (i !== minimum) {
      let temp = array[minimum];
      array[minimum] = array[i];
      array[i] = temp;
    }
  }

  return array;
}

console.log("sorted array", SelectionSort([4, 2, 6, 5, 1, 3]));
