const filterFalsyValues = (values) => {
  let array = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      array.push(values[i]);
    }
  }
  return array;
};
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(["hello", 1233, []]));
