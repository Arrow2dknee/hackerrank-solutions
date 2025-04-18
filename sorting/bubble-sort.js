/**
 * Write a function to sort list of elements using bubble sorting strategy
 * Input array -
 * [4,2,6,5,1,3]
 */

function BubbleSort(array) {
  if (!array) {
    return undefined;
  }
  let length = array.length;
  while (length > 0) {
    for (let i = 0; i < length - 1; ++i) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    --length;
  }
  return array;
}

console.log(BubbleSort([4, 2, 6, 5, 9, 3, 5, 32, 12]));
