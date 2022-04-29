// Write code to add all the numbers in `arr` and return the total

var sumArray = function (arr) {
    //arr has a lot of numbers and so reduce adds them together until the only thing left is the answer. reduce is cool because its a pattern that takes in two paramters and you can do whatever ypou fucking want twith those two parameters (a=previousvalue, b =currentvalue and a is the value reutrned and b is where you are in the array)
  return arr.reduce((a, b) => a + b);
};
