// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//* Function to prompt user for password options *\\
function getPasswordOptions() {
  var options = {};
  var length = parseInt(
    prompt('Enter the length of the password (between 8 and 128 characters):"')
  );
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt(' Invalid input! Please enter a valid length between 8 and 128:'));
  }
  options.length = length;
  options.includeLowercase = confirm('Include lowercase letters?');
  options.includeUppercase = confirm('Include uppercase letters?');
  options.includeNumbers = confirm('Include numbers?');
  options.includeSpecialCharacters = confirm('Include special characters?');

  return options;
}

var passwordOptions = getPasswordOptions();
console.log(passwordOptions);


//* Function for getting a random element from an array *\\
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}


//* Function to generate password with user input *\\
function generatePassword() {
  var options = getPasswordOptions();

    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numberChars = '0123456789';
    var specialChars = '!@#$%^&*()-_+=~`[]{}|;:,.<>?';
    var password = '';
    var charPool = '';
    if (options.includeLowercase) charPool += lowercaseChars;
    if (options.includeUppercase) charPool += uppercaseChars;
    if (options.includeNumbers) charPool += numberChars;
    if (options.includeSpecialChars) charPool += specialChars;

    for (var i = 0; i < options.length; i++) {
        password += getRandom(charPool);
    }

    return password;
}
//* Get references to the #generate element *\\
var generateBtn = document.querySelector('#generate');

//* Write password to the #password input *\\
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//* Add event listener to generate button *\\
generateBtn.addEventListener('click', writePassword);