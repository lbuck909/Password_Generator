//define the characters here//
function getPassword() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+?><:{}[]";

  let passwordLength = 128;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    console.log(randomNumber);

    password += chars.substring(randomNumber, randomNumber + 1);
    console.log(password);
  }
  
  document.getElementById("password").value = password;
  var buttonSelector = document.getElementById("password");


}
const element = document.getElementById("genButton");
  element.addEventListener("click", getPassword);
      //set value of DOM elements here//
const passwordLength = document.getElementById("passwordLength");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase")
const symbols = document.getElementById("symbols");

//place script for length specification here//
genButton.addEventListener("click", () => {
  let chars = chars;
  numbers.checked ? (chars += numbers) : "";
  symbols.checked ? (chars += symbols) : "";
  passwordLength.value = generatePassword(length.value, chars);
});