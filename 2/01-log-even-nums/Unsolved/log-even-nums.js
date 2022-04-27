// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function (num) {
  //I want an if statement inside a for loop because for every variable if a number before that num has nothing left over after being divided by 2 then I want to console log all those numbers
  for (var i = 0; i <= num; i++) {
      //its not num%2 because we don't want to see if num is we want to check all the numbers before num and push them through our for loop and then log them
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
