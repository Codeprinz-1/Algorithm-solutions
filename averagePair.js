//  Task; write a function. Given a sorted array of integers and a target average, determine if there is a pair of values in the array
// where the average of the pair equals the target average. There may be more than one pair that matches the average target

const averagePair = (arr, av) => {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < 2) return false;
  let pointer1 = 0;
  let pointer2 = arr.length - 1;
  while (pointer2 > pointer1) {
    let tempav = (arr[pointer1] + arr[pointer2]) / 2;
    if (tempav === av) return true;
    else if (tempav > av) pointer2--;
    else pointer1++;
  }
  return false;
};
