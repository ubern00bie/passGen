// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

function generatePassword() {
  var selectedType = 0;
  var listLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var listUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var listSpec = ["!",'"',"'","-",".","/",";","<",">","[","]","`","|","~","@","#","$","%","^","&","*","(",")","_","+","{","}","|",":","?"];
  var listNum = ["0","1","2","3","4","5","6","7","8","9"];
  var charPool = [];
  
  // Prompt User for chosen length from 8 to 128 characters
  var userLength = prompt("What length would you like the password to be?");
  if (userLength > 7 && userLength < 129) {  
    // Prompt User for password criteria and add arrays which match criteria to the "pool"
    // Prompt to include lowercase
    var charLower = prompt("include lowercase?");
    if (charLower.toLocaleLowerCase() === "y") {
      charPool = charPool.concat(listLower);
      alert("You chose to include lowercase letters.");
      selectedType++;
      }
    else if (charLower.toLocaleLowerCase() ==="n" || charLower === "") {
      alert("No lowercase letters will be included.")
    }
    else if (charLower.toLocaleLowerCase() != "y" || charLower.toLocaleLowerCase() != "n") {
      alert("please enter 'y' or 'n'")
    }
    // Prompt to include uppercase
    var charUpper = prompt("include uppercase?");
    if (charUpper.toLocaleLowerCase() === "y") {
      charPool = charPool.concat(listUpper);
      alert("You chose to include uppercase letters.");
      selectedType++;
    }
    else if (charUpper.toLocaleLowerCase() ==="n" || charUpper === "") {
      alert("No uppercase letters will be included.")
    }
    else if (charUpper.toLocaleLowerCase() != "y" || charUpper.toLocaleLowerCase() != "n") {
      alert("please enter 'y' or 'n'")
    }
    // Prompt to include numbers
    var charNum = prompt("include numbers?");
    if (charNum.toLocaleLowerCase()  === "y") {
      charPool = charPool.concat(listNum);
      alert("You chose to include numbers.");
      selectedType++;
    }
    else if (charNum.toLocaleLowerCase()  ==="n" || charNum === "") {
      alert("No numbers will be included.")
    }
    else if (charNum.toLocaleLowerCase() != "y" || charNum.toLocaleLowerCase() != "n") {
      alert("please enter 'y' or 'n'")
    }
    // Prompt to include special characters
    var charSpec = prompt("include special characters?");
    if (charSpec.toLocaleLowerCase() === "y") {
      charPool = charPool.concat(listSpec);
      alert("You chose to include special characters.");
      selectedType++;
    }
      else if (charSpec.toLocaleLowerCase() ==="n" || charSpec === "") {
      alert("No special characters will be included.");
    }
    else if (charSpec.toLocaleLowerCase() != "y" || charSpec.toLocaleLowerCase() != "n") {
      alert("please enter 'y' or 'n'")
    }
    // if statement ensure that user has selected criteria
    if (selectedType > 0){
    // Loop - select random characters from pool according to user's chosen length
      var newPass = "";
      for (var i = 0; i < userLength; i++) {
      charRandom = charPool[Math.floor(Math.random() * charPool.length)];
      newPass = newPass.concat(charRandom);
      }
    placeholder = "New Password: " + newPass;
    return placeholder;
    }
    // display errors if criteria not met
    else if (selectedType === 0 && (userLength > 7 && userLength < 129)) {
      alert("Whoops! Looks like you forgot to select some criteria. Let's try that again.")
    }
  else (alert("Whoops! Try again, passwords must be between 8 and 128 characters."));
}
}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
