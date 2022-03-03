// Task: write a function called which takes in an object and finds all of the values which are numbers and coverts them to strings. Recursion would be a great way to solve this!

const stringifyNumbers = (obj) => {
  let tempObj = Object.assign({}, obj);
  for (let key in tempObj) {
    if (tempObj[key].constructor === Object) {
      tempObj[key] = stringifyNumbers(tempObj[key]);
    } else if (typeof tempObj[key] === "number") {
      tempObj[key] = `${tempObj[key]}`;
    }
  }
  return tempObj;
};
