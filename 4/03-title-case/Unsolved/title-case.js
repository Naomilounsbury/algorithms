// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function (str) {
  console.log(str.split(" "));
 return str.split(" ").map((word) => {
    return word[0].toUpperCase()+ word.slice(1)
  }).join(" ");
 
};
