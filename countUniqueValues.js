// Task: Implement a function that accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted

const countUniqueValues = (array) => {
  if (!array[0]) return 0;
  let pointer = 0;
  for (let pointer2 = 1; pointer2 < array.length; pointer2++) {
    if (array[pointer] !== array[pointer2]) {
      pointer++;
      array[pointer] = array[pointer2];
    }
  }
  return pointer + 1;
};
