// Input options as arrays
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var caseLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var caseUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordOptions = []
var finalPassword = []
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Password Generation logic
function generatePassword() {
  var confirmLength = (prompt("How many characters? Choose between 8-128"));
  // Alert for insufficient character length
  while (confirmLength <= 7 || confirmLength >= 128) {
    alert("Password must be between 8-128 characters")
    var confirmLength = (prompt("How many characters? Choose between 8-128"));
  }
  // $ confirm functions for character types to incldue
  var confirmCaseLower = confirm("Click OK to include lower case letters");
  var confirmCaseUpper = confirm("Click OK to include upper case letters");
  var confirmSpecChars = confirm("Click OK to include special characters");
  var confirmNumeral = confirm("Click OK to include numerals");

  // Alert for not chooseing one type 
  while (confirmCaseLower === false && confirmCaseUpper === false && confirmSpecChars === false && confirmNumeral === false) {
    alert("You must choose at least one character type to include");
    var confirmCaseLower = confirm("Click OK to include lower case letters");
    var confirmCaseUpper = confirm("Click OK to include upper case letters");
    var confirmSpecChars = confirm("Click OK to include special characters");
    var confirmNumeral = confirm("Click OK to include numerals");
  }
  // Logic to add arrays of characters based on user inputs
  if (confirmCaseLower === true) {
    passwordOptions = passwordOptions.concat(caseLower)

  }
  if (confirmCaseUpper === true) {
    passwordOptions = passwordOptions.concat(caseUpper)

  }
  if (confirmSpecChars === true) {
    passwordOptions = passwordOptions.concat(specChar)


  }
  if (confirmNumeral === true) {
    passwordOptions = passwordOptions.concat(number)

  }
  // Iterates over concacted array add random characters
  for (var i = 0; i < confirmLength; i++) {
    finalPassword.push(randomizer(passwordOptions))
  }
  return finalPassword.join("")
}
// Actual randomizer function 
function randomizer(passwordOptions) {
  var randomIndex = Math.floor(Math.random() * passwordOptions.length);
  var randomElement = passwordOptions[randomIndex];
  return randomElement

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




