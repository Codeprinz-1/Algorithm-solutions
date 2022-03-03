// write a function which takes in an array of numbers and returns the product of them all

const productOfArray = (arr) => {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
};
