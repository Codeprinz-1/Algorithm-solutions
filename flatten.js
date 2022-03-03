// Task: write a function whihc accepts an array of arrays and returns a new array with all values flattened.

const flatten = (arr) => {
  var newArray = [];
  for (let i of arr) {
    if (Array.isArray(i)) {
      newArray = newArray.concat(flatten(i));
    } else {
      newArray.push(i);
    }
  }
  return newArray;
};
