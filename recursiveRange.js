// Task: write a function which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};
