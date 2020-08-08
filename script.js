// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //I want a prompt that notifies the user of the password length criteria

  var passwordLength = "";

  //I want a loop of a prompt that will not go away until the length criteria is met.

  while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
    passwordLength = prompt("Please specify password length between 8 - 128 characters.");
    console.log(passwordLength);
  }
  //I want four variable to specify if user wants uppercase letters, lowercase letters, numbers and special characters in their password.

  var uppercaseLett = confirm("Do you want uppercase letters in your password?");
  var lowercaseLett = confirm("Do you want lowercase letters in your password?");
  var passwordNumb = confirm("Do you want numbers in your password?");
  var specialChar = confirm("Do you want special characters in your password?");

  //I want another loop of these variables to have the user confirm my above variables

  while (!uppercaseLett && !lowercaseLett && !passwordNumb && !specialChar) {
    uppercaseLett = confirm("Do you want uppercase letters in your password?");
    lowercaseLett = confirm("Do you want lowercase letters in your password?");
    passwordNumb = confirm("Do you want numbers in your password?");
    specialChar = confirm("Do you want special characters in your password?");
  }

  //setup open string variables to utilize in the for loop
  
  var character = "";
  var randomPassword = "";
  var randomNumber = "";
  //I am linking my uppercase letters, lowercase letter, Numbers and special characters to my while loop above.

  var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  var numberChar = "0123456789";
  var specialCharacter = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


  if (uppercaseLett) {
    character += uppercaseChar;
  };

  if (lowercaseLett) {
    character += lowercaseChar;
  };

  if (passwordNumb) {
    character += numberChar;
  };

  if (specialChar) {
    character += specialCharacter;
  }

//for loop is inside the generate password function to generate an actual random password.

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * character.length)
    randomPassword += character[randomNumber]
  }
  return (randomPassword);
}
