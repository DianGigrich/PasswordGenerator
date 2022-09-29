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

  
  var chosenLength;
  var Upper;
  var Lower;

  // choose length and test
  chosenLength = prompt("How long would you like your password? Between 8-128")

  chosenLength = (parseInt(chosenLength) - 1)


  if (chosenLength < 7 || chosenLength > 128) {
    alert("Enter valid length")
    generatePassword()

  } else if (!chosenLength) {
    alert("Enter valid length")
    generatePassword()
  }
  console.log(chosenLength)


  // choose letter
  var letter = confirm("Would you like to use Letters in your password?")
  if (letter) {
    Upper = confirm("Would you like to use Uppercase letters?")
    Lower = confirm("Would you like to use Lowercase letters?")
  }
  
  var number = confirm("Would you like to use Numbers in your password?")
  var special = confirm("Would you like to use Special Characters in your password?")

  var secure = confirm("Would you like your password to be secure? (Overrides previous choices)")



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

  if (Upper == false && Lower == false) {
    alert("Enter valid answer. You chose letters without Uppercase or Lowercase!")
    generatePassword()
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
  if (secure) {
    pool = pool + symbol + upperAlph + lowerAlph + numbers
  }

  if (number == false && letter == false && special == false && secure == false) {
    alert("Inappropriate selection. Start Over")
    generatePassword()
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
