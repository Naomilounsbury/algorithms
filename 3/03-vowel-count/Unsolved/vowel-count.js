// Write code to return the the number of vowels in `str`

var vowelCount = function (str) {
  const vowelArr = ["a", "e", "i", "o", "u"];
  let count = 0;
  const splitString = str.toLowerCase().split("");
  //   if(splitString.length<1){
  //       return 0
  //   }
  console.log(splitString);
  splitString.forEach((letter) => {
    if (vowelArr.includes(letter)) {
      count++;
    }
  });
  return count;
};
