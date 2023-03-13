//define the characters here//
const passwordLength = document.getElementById("passwordLength").value;
//define the characters here//
var chosenLength =passwordLength;
function getPassword() {
  console.log(chosenLength)
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@#$%^&*()_+?><:{}[]";
  // let passwordLength = ;
  let password = "";
  for (let i = 0; i < chosenLength; i++) {
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
// const passwordLength = document.getElementById("passwordLength");
const numbers = document.getElementById("numbers");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase")
const symbols = document.getElementById("symbols");
//place script for length specification here//
// genButton.addEventListener("click", () => {
//   let newchars = chars;
//   numbers.checked ? (newchars += numbers) : "";
//   symbols.checked ? (newchars += symbols) : "";