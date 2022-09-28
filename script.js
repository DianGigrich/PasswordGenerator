// Assignment Code

//The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors
var generateBtn = document.querySelector("#generate");

var Chosenlength = prompt("How long would you like your password? Between 8-128")
var letter = confirm("Would you like to use Letters in your password? OK means yes, Cancel means No.")
var number = confirm("Would you like to use Numbers in your password?")
var special = confirm("Would you like to use Special Characters in your password?")
var Upper = confirm("Would you like to use Uppercase letters?")
var Lower = confirm("Would you like to use Lowercase letters?")

const alphabet = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbol = "~!@#$%^&*"
const Upperalphabet = "ABCDEFJGIJKLMNOPQRSTUVWXYZ"

function generatePassword() {
  while (i<=Chosenlength.length) {
if (letter) {
    // function RandomLetter() {
          
      return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

if (number) {
    // function RandomNumber() {
          
      return numbers[Math.floor(Math.random() * numbers.length)]
  }

if (special) {
  // function RandomSpecial() {
    
    return numbers[Math.floor(Math.random() * numbers.length)]
  }

i++
}
}
// console.log(generatePassword.join(''))


  // function generatePassword {
  //   for (i=0, i<=Chosenlength.length; i++)
    
  // }
// charAt() is a method that returns the character from the specified index.

// Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character in a string, called stringName, is stringName.length – 1.
// .map

// .join('')

// function generatePassword {
//   for (i=0; i<=13; i++) {
//     var mix = characters.charAt(Math.floor(Math.random() * length));        
//     var newString = results += mix;
//     }
  
//   return: password;
// }





// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

// }

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);