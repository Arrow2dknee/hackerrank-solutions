/**
 * Write a function to sort list of numbers
 */

function InsertionSort(array) {
  if (!array || !Array.isArray(array)) {
    return null;
  }
  console.log("Given array", array);

  // Outer loop to iterate through all elements
  for (let i = 0; i < array.length; ++i) {
    // inner loop to compare
    for (let j = i + 1; j < array.length && j > 0; --j) {
      const prevIndex = j - 1;
      if (array[j] < array[prevIndex]) {
        let temp = array[j];
        array[j] = array[prevIndex];
        array[prevIndex] = temp;
      }
    }
  }

  return array;
}

console.log("Sorted array", InsertionSort([4, 4, 4, 4, 4, 1]));
