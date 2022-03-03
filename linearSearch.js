// Task: write a functoin which accepts an array and a value and returns the index at which the value exists. If the value does not exist in the array, return -1

const linearSearch = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};
