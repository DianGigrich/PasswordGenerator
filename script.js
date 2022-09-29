// Assignment Code

var generateBtn = document.querySelector("#generate");


const lowerAlph = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "~!@#$%^&*"
const upperAlph = "ABCDEFJGIJKLMNOPQRSTUVWXYZ"

var result = " "

function generatePassword() {

  // choose length and test
  var Chosenlength;

  function ChooseLength() {
    Chosenlength = prompt("How long would you like your password? Between 8-128")
    Chosenlength = parseInt(Chosenlength)
    if (Chosenlength < 7 || Chosenlength > 129) {
      alert("Enter valid length")
      ChooseLength()
    }
  }
  ChooseLength()


  var letter = confirm("Would you like to use Letters in your password? OK means yes, Cancel means No.")
  var number = confirm("Would you like to use Numbers in your password?")
  var special = confirm("Would you like to use Special Characters in your password?")
  var Upper = confirm("Would you like to use Uppercase letters?")
  var Lower = confirm("Would you like to use Lowercase letters?")


  

  var pool = " "

  // add lowercase alphabet to pool array
  if (letter && Lower) {
    pool = pool + Lower
    console.log(pool)
  }
  // add uppercase alphabet to pool array
  if (letter && Upper) {
    pool = pool + Upper
  }
  // add numbers to pool array 
  if (number) {
    pool = pool + number
  }
  //add special characters to pool array 
  if (special) {
    pool = pool + special
  }
  console.log(Chosenlength)
  for (i = 0; i <= Chosenlength; i++) {
    result = result + pool[Math.floor(Math.random() * pool.length)]
    console.log(result)

  }

}
// charAt() is a method that returns the character from the specified index.

// function generatePassword {
//   for (i=0; i<=13; i++) {
//     var mix = characters.charAt(Math.floor(Math.random() * length));        
//     var newString = results += mix;
//     }

//   return: password;
// }





// // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//   // // // // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
