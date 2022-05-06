// Write code to create a function that returns the factorial of `num`

var factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  const arr = Array(num).fill(0);
  return arr
    .map((value, index) => {
      return num - index;
    })
    .reduce((a, b) => a * b);
};
