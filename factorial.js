// Task: write a function which accepts a number and returns the factoril of that number. A factorial is the product of an integer and all the integers below it.
// e.g factorial (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24 factorial zero (0!) is always 1.

const factorial = (num) => {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};
