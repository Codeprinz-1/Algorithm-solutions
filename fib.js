// write a function  which accepts a number and returns the nth number in the fibonacce sequence. Recall that the fiibonacce sequence is the sequence of whole numbers 1,1,2,3,5,8 .... whihc strts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};
