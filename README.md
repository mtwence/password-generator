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

This is the actual function that randomizes the chracters for your password.
```ruby
function randomizer(passwordOptions) {
  var randomIndex = Math.floor(Math.random() * passwordOptions.length);
  var randomElement = passwordOptions[randomIndex];
  return randomElement
```

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