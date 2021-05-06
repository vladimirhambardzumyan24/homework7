const palindrom = (str) => {
  return function () {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };
};
const f1 = palindrom("aasdffdsaa");
console.log(f1());
