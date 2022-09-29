// Assignment Code

var generateBtn = document.querySelector("#generate");

// catalog
const lowerAlph = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "~!@#$%^&*"
const upperAlph = "ABCDEFJGIJKLMNOPQRSTUVWXYZ"



function generatePassword() {

  // RESULTS!
  var result = " "

  // choose length and test
  var chosenLength;

  chosenLength = prompt("How long would you like your password? Between 8-128")

  chosenLength = (parseInt(chosenLength) - 1)


  if (chosenLength < 7 || chosenLength > 128) {
    alert("Enter valid length")
    generatePassword()

  } else chosenLength
  console.log(chosenLength)


  // user prompts
  var letter = confirm("Would you like to use Letters in your password?")
  var number = confirm("Would you like to use Numbers in your password?")
  var special = confirm("Would you like to use Special Characters in your password?")
  var Upper = confirm("Would you like to use Uppercase letters?")
  var Lower = confirm("Would you like to use Lowercase letters?")
  var Secure = confirm("Would you like your password to be secure? (Overrides previous choices)")



  var pool = ("")

  // add lowercase alphabet to pool array
  if (letter && Lower) {
    pool = pool + lowerAlph
    console.log(pool)
  }
  // add uppercase alphabet to pool array
  if (letter && Upper) {
    pool = pool + upperAlph
    console.log(pool)
  }
  // add numbers to pool array 
  if (number) {
    pool = pool + numbers
    console.log(pool)
  }
  //add special characters to pool array 
  if (special) {
    pool = pool + symbol
    console.log(pool)
  }
  //  secure password choice
  if (Secure) {
    pool = pool + symbol + upperAlph + lowerAlph + numbers
  }
  console.log(chosenLength)
  for (i = 0; i <= chosenLength; i++) {
    result = result + pool[Math.floor(Math.random() * pool.length)]
    console.log(result)

  }
  return result

}


// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//   // // // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
