// Task: write a recursive funtion which returns true if the  string p assed to it is a palendrome (reads the same forward and backward). Otherwise it returns false.

const isPalindrome = (str) => {
  // add whatever parameters you deem necessary - good luck!
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else return false;
};
