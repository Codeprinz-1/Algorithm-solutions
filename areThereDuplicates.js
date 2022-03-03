// Task: Impolement a function, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

const areThereDuplicates = (...args) => {
  // good luck. (supply any arguments you deem necessary.)
  let frequencyCounter = {};

  for (let arg of args) {
    if (frequencyCounter[arg]) return true;
    else {
      frequencyCounter[arg] = ++frequencyCounter[arg] || 1;
    }
  }
  return false;
};
