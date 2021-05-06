const redundant = (str) => {
  const returnString = () => {
    console.log(str);
  };
  return returnString;
};

const f1 = redundant("apple");
const f2 = redundant("pear");
const f3 = redundant("");
f1();
f2();
f3();
