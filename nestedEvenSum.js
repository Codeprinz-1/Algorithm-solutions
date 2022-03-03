// write a function . Return the sum o fall the even numbers in an object which may contain nested objects

const nestedEvenSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "object") sum += nestedEvenSum(obj[key]);
    else if (typeof obj[key] === "number") {
      if (obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
  }
  return sum;
};
