// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function (str) {
  console.log(str);
  let newObject = {};
  for (var i = 0; i < str.length; i++) {
    const abc = /[abc]/;
    const letter = str[i];
    if (letter in newObject) {
      newObject[letter]++;
    } else {
      newObject[letter] = 1;
    }

    // .map((element, index, array) => {
    //   element.sort((a, b) => {});
    // });

  }
  return newObject
};
