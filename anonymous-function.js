const add_suffix = (str1) => {
  return function (str2) {
    console.log(str2 + str1);
  };
};
const add_ly = add_suffix("ly");
add_ly("hopeless");
