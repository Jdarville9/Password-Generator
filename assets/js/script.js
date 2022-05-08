var generateBtn = document.querySelector("#generate");

// Write password to the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt the user for password criteria
function generatePassword() {

  // Ask password length
  var passLength = (prompt("How many characters would you like to have in your password?"));

    while (isNaN(passLength) || passLength < 8 || passLength > 128) {
     window.alert("Password must have a value of 8 - 128 characters. Please choose valid option.")

     var passLength = (prompt("How many characters would you like to have in your password?"));
    }

  window.alert("You have selected " + passLength + " characters.")
  
  // Empty array to be used for password parameters
  var passArray = []

  // Password parameter arrays
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", 'D', "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", ">", "<", "?", "'", ",", "."];
  var numericCharacter = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


  // Prompt lower case
  var confirmLowerCase = window.confirm("Would you like to include lowercase letters in your password?");
    if (confirmLowerCase) {
      passArray = passArray.concat(lowerCase)
      window.alert("You have chosen to INCLUDE lowercase characters.") 
        
    } else {
        window.alert("You have chosen NOT to include lowercase characters.")
      }

  // Prompt upper case
  var confirmUpperCase = window.confirm("Would you like to include uppercase letters in your password?");
    if (confirmUpperCase) {
      passArray = passArray.concat(upperCase)
      window.alert("You have chosen to INCLUDE uppercase characters.") 
        
    } else {
        window.alert("You have chosen NOT to include uppercase characters.")
    }
    
  // Prompt special characters
  var confirmSpecialCharacter = window.confirm("Would you like to include special characters in your password?");
    if (confirmSpecialCharacter) {
      passArray = passArray.concat(specialCharacter)
      window.alert("You have chosen to INCLUDE special characters.") 
        
    } else {
        window.alert("You have chosen NOT to include special characters.")
    }

  // Prompt numeric characters
  var confirmNumericCharacter = window.confirm("Would you like to include numeric characters in your pasword?");
    if (confirmNumericCharacter) {
      passArray = passArray.concat(numericCharacter)
      window.alert("You have chosen to INCLUDE numeric characters.") 
        
    } else {
        window.alert("You have chosen NOT to include numeric characters.")
    }

    while(confirmLowerCase === false && confirmUpperCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false){
      window.alert("You must select at least one character type!")

      var confirmLowerCase = window.confirm("Would you like to include lowercase letters in your password?");
        if (confirmLowerCase) {
          passArray = passArray.concat(lowerCase)
          window.alert("You have chosen to INCLUDE lowercase characters.") 
            
        } else {
            window.alert("You have chosen NOT to include lowercase characters.")
          }

      var confirmUpperCase = window.confirm("Would you like to include uppercase letters in your password?");
        if (confirmUpperCase) {
          passArray = passArray.concat(upperCase)
          window.alert("You have chosen to INCLUDE uppercase characters.") 
            
        } else {
            window.alert("You have chosen NOT to include uppercase characters.")
          }

      var confirmSpecialCharacter = window.confirm("Would you like to include special characters in your password?");
        if (confirmSpecialCharacter) {
          passArray = passArray.concat(specialCharacter)
          window.alert("You have chosen to INCLUDE special characters.") 
            
        } else {
            window.alert("You have chosen NOT to include special characters.")
          }

      var confirmNumericCharacter = window.confirm("Would you like to include numeric characters in your pasword?");
        if (confirmNumericCharacter) {
          passArray = passArray.concat(numericCharacter)
          window.alert("You have chosen to INCLUDE numeric characters.") 
            
        } else {
            window.alert("You have chosen NOT to include numeric characters.")
          }
    }

    var newPassword = ""

    for (var i = 0; i < passLength; i++) {
      randomArray = Math.floor(Math.random() * passArray.length);
      newPassword = newPassword + passArray[randomArray];
      console.log(newPassword)
    }
    return newPassword;
}

