// write a function which accepts a string and returns a new string in reverse

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
