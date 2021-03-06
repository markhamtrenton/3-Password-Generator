// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// user input for string below---- 
function generatePassword() {

  var userLength = prompt('How many charaters would you like your password to contain?');

  // Round down 
  userLength = Math.floor(parseInt(userLength));
  

  // min of charaters below-------
  while (isNaN(userLength) || userLength < 8 || userLength > 128) {
    alert('min of 8-128 charaters');
    userLength = prompt('Password Length must be min 8 to max 128');
  };
  


  //confrimations below for prompt-----

  var userLower = confirm('click OK to confirm if you want lowercase letters?');
  var userUpper = confirm('click OK to confirm if you want uppercase letters?');
  var userSpecial = confirm('click OK to confirm if you want any special characters?');

  // minimul requirements alert prompt below------
  while (userLower === false && userUpper === false && userSpecial === false) {
    alert('You have to pick at least one! Try Again!');
    userLower = confirm('click OK to confirm if you want lowercase letters?');
    userUpper = confirm('click OK to confirm if you want uppercase letters?');
    userSpecial = confirm('click OK to confirm if you want any special characters?');
  };
  //numeric
  //special charaters
  //lower case
  //upper case

  // array values 
  var passLower = 'abcdefghijklmnopqrstuvwxyz';
  var passUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var passSpecial = '!@#$%^&*~+=';
  var sum = '';

  //if function and aswell as splitting up arrays using .split below----

  if (userLower === true) {
    passLowerSplit = passLower.split('');

  } else {
    passLowerSplit = [];
  };

  if (userUpper === true) {
    passUpperSplit = passUpper.split('');
  } else {
    passUpperSplit = [];
  };

  if (userSpecial === true) {
    passSpecialSplit = passSpecial.split('');
  } else {
    passSpecialSplit = [];
  };

  // combining arrays------- 
  var passContainer = passLowerSplit.concat(passUpperSplit, passSpecialSplit);

  // looping through arrays to generate final string below
  for (i = 0; i < userLength; i++) {
    var num = Math.floor(Math.random() * passContainer.length);
    sum += passContainer[num];
  };
  // returning value below--- 
  return (sum);
}

