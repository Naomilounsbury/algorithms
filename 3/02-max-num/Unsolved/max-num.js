// Write code to return the largest number in the given array

var maxNum = function (arr) {
  //   var max = arr[0];
  //   for (var i = 1; i < arr.length - 1; i++) {
  //     var current = arr[i];
  //     if (current > max) {
  //       max = current;
  //     }
  //     return max;
  //   }
  console.log(arr);
  let result;
  arr.sort((a, b) => {
    console.log(a);
    console.log(b);
    if (a > b) {
      result = a;
    } 
  });
  return result
};
