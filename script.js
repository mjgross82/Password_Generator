// Declare variables for a counter and password length.
var counter = 0
pwlength = 0

// Set up an array for each of four sets of characters that can be selected by the user for inclusion in the password.
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var sym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "?", "~"]
// Set up four temporary, empty to arrays to simplify logic for character selection.
var tempArray1 = []
var tempArray2 = []
var tempArray3 = []
var tempArray4 = []

function chooseLower() {
    var lowerPrompt = prompt("Would you like your password to contain lowercase letters? Please enter yes or no.");
        lowerPrompt = lowerPrompt.toLowerCase();
        if (lowerPrompt === "yes") {
            var tempArray1 = Array.from(lower);
        }
        else if (lowerPrompt === "no") {
            var tempArray1 = [];
        }
        else {
            alert("Please enter either yes or no.");
            chooseLower();
        }
}