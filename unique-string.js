const uniques = (str) => {
  let array = [];
  return function () {
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
  };
};
const f1 = uniques("54ls");
console.log(f1());
