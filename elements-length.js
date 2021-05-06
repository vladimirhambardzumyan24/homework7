const filterByLength = (values) => {
  let array = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i].length > 3) {
      array.push(values[i]);
    }
  }
  return array;
};
console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"]));
