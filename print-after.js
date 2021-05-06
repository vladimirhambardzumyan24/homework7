const printAfter = (print) => {
  console.log("Hellow World");
  return print();
};
const print = () => console.log("Elon Musk");
printAfter(print);
