// Task: write a function, Given two positive integers, find out if the two numbers have the same frequency of digits

const sameFrequency = (int1, int2) => {
  int1 = String(int1);
  int2 = String(int2);
  if (int1.length !== int2.length) return false;
  let frequencyCounter = {};

  for (let char of String(int1)) {
    frequencyCounter[char] = ++frequencyCounter[char] || 1;
  }

  for (let char of String(int2)) {
    if (!frequencyCounter[char]) return false;
    else {
      --frequencyCounter[char];
    }
  }
  return true;
};
