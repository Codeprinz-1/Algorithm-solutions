// Task: Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

const validAnagram = (firstString, secondString) => {
  if (firstString.length !== secondString.length) return false;

  let stringFrequency = {};

  for (let str of firstString) {
    stringFrequency[str] = ++stringFrequency[str] || 1;
  }

  for (let str of secondString) {
    if (!stringFrequency[str]) return false;
    else {
      --stringFrequency[str];
    }
  }

  return true;
};
