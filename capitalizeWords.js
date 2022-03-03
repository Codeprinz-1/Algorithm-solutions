// Task: write a function. Given an array of words, return a new array contianing each word capitalized.

const capitalizeWords = (arr) => {
  if (arr.length === 1) return [arr[0].toUpperCase()];
  const res = capitalizeWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length - 1)[0].toUpperCase());
  return res;
};
