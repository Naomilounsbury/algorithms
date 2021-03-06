// Write code to create a function that accepts an array of numbers, finds the largest two numbers, and returns the product of the two

var productOfLargestTwo = function (arr) {
  let largestNum = -100;
  let secondLargest = -100;
  arr.forEach((element, i) => {
    if (element > largestNum) {
      largestNum = element;
    }
  });
  arr.forEach((element) => {
    if (element > secondLargest && element < largestNum) {
      secondLargest = element;
    }
  });
  return largestNum * secondLargest;
};
