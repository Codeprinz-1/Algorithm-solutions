// Task: Given an array of integers and a number, write function, which finds the maximum sum of a subarray with the length  of the number passed to the function.

const maxSubarraySum = (array, num) => {
  if (array.length < num) return null;
  let max = 0;
  let tempmax = 0;

  for (let i = 0; i < num; i++) {
    max += array[i];
  }

  tempmax = max;

  for (let i = num; i < array.length; i++) {
    tempmax = tempmax + array[i] - array[i - num];

    max = Math.max(tempmax, max);
  }
  return max;
};
