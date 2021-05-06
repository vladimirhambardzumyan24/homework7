const sum = (num1, num2) => {
  const sumNumber = (num2) => {
    console.log(num1 + num2);
  };
  return sumNumber;
};
sum(2)(7);
const addOne = sum(1);
const addTen = sum(10);
addOne(2);
addTen(3);
