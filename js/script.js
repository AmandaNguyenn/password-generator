// Assignment Code
//DO NOT CHANGE THIS CODE
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //TODO: your code here

    // These are my variables. I seperated the characters into their own arrays based on the type of character they were.
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var numbers = "1234567890".split("");
  var specialCharacters = "!@$*&%,.-_".split("");
  var length = 10;
  var password = [];


    // this is the pop-up box asking them to confirm the requirements
  var passwordLength = prompt("Requirements for password");
  var capLetters = confirm("Require capital letter");
  var lowerLetters = confirm("Require lowercase letters");
  var numerals = confirm("Require numbers");
  var specchar = confirm("require special characters");

    //this part of the code is where the arrays come together to create the password
  if(capLetters === true) {
    password = password.concat(characters);
  }
  if(lowerCase === true){
    password = password.concat(lowerCase);
  }
  if(numerals === true){
    password = password.concat(numbers);
  }
  if(specchar === true){
    password = password.concat(specialCharacters);
  }

    // this is where the password is generated.
var extraSecretPassword = "";
for (i = 0; i <= passwordLength.length; i++) {
  var randomCollection = Math.floor(Math.random()*password.length);
  var passwordgenerator = password[randomCollection];
  extraSecretPassword = passwordgenerator + extraSecretPassword;
  
}
console.log(extraSecretPassword)
return extraSecretPassword;

}

// Write password to the #password input
/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);