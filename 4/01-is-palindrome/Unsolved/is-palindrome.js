// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function (str) {
  console.log(str.split(""));
  const splitStr = str.toLowerCase().split("");
  console.log(splitStr.indexOf(splitStr[1]), "lalalaalal");

  for (var i = 0; i < splitStr.length; i++) {
    const comparativeLetter = str.charAt(
      splitStr.length - 1 - splitStr.indexOf(splitStr[i])
    );
    console.log(splitStr[i], "the original letter");
    console.log(comparativeLetter, "the comparative letter");
    if (splitStr[i] !== comparativeLetter) {
      return false;
    }
  }
  return true;
};
