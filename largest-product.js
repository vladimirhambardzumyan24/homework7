const largeProduct = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] * arr[i + 1]);
  }

  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr[newArr.length - 1];
};
console.log(largeProduct([1, 2, 1, 2, 3, 1]));
