// write a function which takes in two strings and checks whether the characters in the first string for a subsequence of the characters in the second strind.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string without their order changing.

const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) pointer1++;
    if (pointer1 === str1.length) return true;
    pointer2++;
  }
  return false;
};
