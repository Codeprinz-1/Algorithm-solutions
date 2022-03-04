// write a function which takes in two strings and checks whether the characters in the first string for a subsequence of the characters in the second strind.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string without their order changing.

const isSubsequence = (str1, str2) => {
  let pointer1 = 0;
  let pointer2 = str1.length;

  while (pointer2 <= str2.length) {
    if (str2.substring(pointer1, pointer2) === str1) return true;
    else {
      pointer1++;
      pointer2++;
    }
  }
  return false;
};
