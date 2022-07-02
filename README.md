# Random Password Generator


## Table of Contents


- [Description](#description)
- [Technologies](#technologies)
- [Deployed Link](#link)
- [Usage](#usage)
- [User Information](#userinformation)
- [Credits](#credits)
- [License](#license)

## Description
A little handly web tool that allows you to generate a random password for yourself based on a series of user inputs. When "Generate Password" is clicked, the user is given a series of prompts to complete. 

#### Input Variables:
1. Character count (between 8-128)
2. Include lowercase letters (yes/no)
3. Include uppercase letters (yes/no)
4. Include special characters (yes/no)
5. Include numeric values (yes/no)

Once the user has completed all the necessary prompts, a random password is displayed on your screen.

## Technologies Used

- HTML
- CSS
- Javascript


## Deployed Link

[Random Password Generator](https://mtwence.github.io/password-generator/)

## Usage

### Website Demo

![generating password workflow](/assets/images/password-generator-demo.gif)

### Code Snippets

This function is what actually begins the process of creating a random password and is called on when the "generate password" button is clicked (via an event listener). Once the generate button is clicked, then the prompts appear and record the users' input. 
```ruby
function generatePassword() {
  var confirmLength = (prompt("How many characters? Choose between 8-128"));
  // Alert for insufficient character length
  while (confirmLength <= 7 || confirmLength >= 128) {
    alert("Password must be between 8-128 characters")
    var confirmLength = (prompt("How many characters? Choose between 8-128"));
  }

  var confirmCaseLower = confirm("Click OK to include lower case letters");
  var confirmCaseUpper = confirm("Click OK to include upper case letters");
  var confirmSpecChars = confirm("Click OK to include special characters");
  var confirmNumeral = confirm("Click OK to include numerals");
```
<br>

This block of code concatenantes the arrays for all character types, based on whether the user chose to include certain characters or not. For instance if a user only wanted numbers and special characters, then the special chracter array and the numbers array would be joined together into one single array.
```ruby
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
  for (var i = 0; i < confirmLength; i++) {
    finalPassword.push(randomizer(passwordOptions))
  }
  return finalPassword.join("")
```
<br>

From the concatenated array, this function will randomly pick an index position on the array, matching to a certain character. This function returns random chracters in the array until the character limit the user selected is reached. 
```ruby
function randomizer(passwordOptions) {
  var randomIndex = Math.floor(Math.random() * passwordOptions.length);
  var randomElement = passwordOptions[randomIndex];
  return randomElement
```
<br>

## User Information

### **Michael Wence**
[LinkedIn](https://www.linkedin.com/in/michael-wence/) |
[GitHub](https://github.com/mtwence)

## Credits

UCB - Coding Bootcamp


## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

© 2022 Michael Wence. All Rights Reserved.