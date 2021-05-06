const evenQuadradik = (arr) => {
    let sum = 0;
    return function () {
      for (let i = 0; i < arr.length; i++) {
        if(arr[i]%2===0){
            sum+=Math.pow(arr[i],2)
        }
      }
      return sum;
    };
  };
  const f1 = evenQuadradik([3, 4, 2, 3]);
  console.log(f1());