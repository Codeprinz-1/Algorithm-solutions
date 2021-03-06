// Task: write a function which accepts a base and an exponent. The function should return the power of the base  to the exponent.
// This function should mimic the functionality of Math.pow() - do not worry about bases and exponents

const power = (num, pow) => {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
};
