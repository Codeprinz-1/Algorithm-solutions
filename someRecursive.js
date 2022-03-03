// Task: write a recursive function which accepts an array and a callback. The function returns true if a simgle value in the array returns tru when passed to the callback. Otherwise it returns true.

const someRecursive = (arr, func) => {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) return false;
  if (func(arr[0]) === true) return true;
  else return someRecursive(arr.slice(1), func);
};
