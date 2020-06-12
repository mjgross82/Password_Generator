// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

// Set up an array for each of four sets of characters that can be selected by the user for inclusion in the password.
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "?", "~"];

var pwLength = prompt("How long would you like your password to be? Please enter a number between 8 and 128.");

var lowerPrompt = prompt("Would you like your password to contain lowercase letters? Please enter yes or no.");    
  lowerPrompt = lowerPrompt.toLowerCase();
  if (lowerPrompt === "yes") {
    tempArray1 = Array.from(lower);
  }
  else if (lowerPrompt === "no") {
    tempArray1 = []
  };
 
var upperPrompt = prompt("Would you like your password to contain uppercase letters? Please enter yes or no.");   
  upperPrompt = upperPrompt.toLowerCase();
  if (upperPrompt === "yes") {
    var tempArray2 = upper.concat(tempArray1);
  }
  else if (upperPrompt === "no") {
   var tempArray2 = Array.from(tempArray1);
  };
    
var numPrompt = prompt("Would you like your password to contain numbers? Please enter yes or no.");   
  numPrompt = numPrompt.toLowerCase();
  if (numPrompt === "yes") {
    var tempArray3 = num.concat(tempArray2);
  }
  else if (numPrompt === "no") {
    var tempArray3 = Array.from(tempArray2);
  };

var symPrompt = prompt("Would you like your password to contain symbols? Please enter yes or no.");   
  symPrompt = symPrompt.toLowerCase();
  if (symPrompt === "yes") {
    var tempArray4 = sym.concat(tempArray3);
  }
  else if (symPrompt === "no") {
    var tempArray4 = Array.from(tempArray3);
  };

master = Array.from(tempArray4);

for (i = 0; i < master.length; i++) {
  console.log(master[i]);
};

}
      
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

