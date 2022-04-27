// Write code to print all numbers from 1 to `num`
// Assume `num` will be a positive number

var logNums = function (num) {
  if (num === 1) {
    return 1;
  }
  if (num < 1) {
    return 0;
  }

  for (var i = 1; i < num.length - 1; i++) {
    console.log(i);
  }
};
