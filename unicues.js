const uniques = (arr) => {
  let array = [];
  return function () {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          return false;
        }
      }
    }
    return true;
  };
};
const f1 = uniques([3, 4, 2, 3]);
console.log(f1());
