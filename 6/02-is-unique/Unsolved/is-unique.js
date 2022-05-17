// TODO: Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function (arr) {
  const numbers = {};
  for (var i = 0; i <= arr.length; i++) {
    const num = arr[i];
    if (numbers[num]) {
      return false;
    }
    //so I just played with this until I got it but I dont really understand it 
    numbers[num] = true;
  }
  return true;
};
