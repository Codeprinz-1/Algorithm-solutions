// Task: write a function which accepts an object and returns an array of all the values in the object that have a typeof string

const collectStrings = (obj) => {
  let strings = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") strings.push(obj[key]);
    else if (obj[key].constructor === Object) {
      strings = strings.concat(collectStrings(obj[key]));
    }
  }
  return strings;
};
