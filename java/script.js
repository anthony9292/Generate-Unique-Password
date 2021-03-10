window.addEventListener('load', function(){
var length = prompt("How long would you like your password to be?");


while (length < 5 || length > 128) {
length = prompt("Length must equal 8-128.How long would u like it to be?");


}

var uppercase = confirm("add uppercase letters?");
var lowercase = confirm( "add lowercase letters?");
var numbers = confirm("add numbers?");
var symbols = confirm("add symbols?");


while (!(uppercase || lowercase || numbers || symbols)) {

 alert("must select at least one character type!");



 uppercase = confirm("would you like to add uppercase letters?");
 lowercase = confirm("would you like to add lowercase letters?");
  numbers = confirm("would you like to add numbers?");
  symbols = confirm("would you like to add special characters?");
}

const resultEl = document.getElementById('password');

document.getElementById('generate').addEventListener('click', () => {
   resultEl.value = generatePassword(lowercase, uppercase, numbers, symbols, length)


});

document.getElementById('clipboard').addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.value;

    if (!password) {
  
         return;
    }

  textarea.value = password; 
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy')
  textarea.remove();
  alert('Password has been copied to clipboard')

});
});

const randomFun = {  

 lower: getRandomLower,
 upper: getRandomUpper,
 number: getRandomNumber,
 symbol: getRandomSymbol

};


function generatePassword(lower, upper, number, symbol, length) {

let generatedPassword = '';
const typesCount = lower + upper + number + symbol;
const typesArr = [{ 

    lower
},{
   upper

}, { 
    number
}, { 
    symbol
}].filter(item => Object.values(item)[0]);


//loop //

for (let i = 0; i < length; i += typesCount) {
typesArr.forEach(type => {

const funcName = Object.keys(type)[0];
generatedPassword += randomFun[funcName]();


  });
}
const finalPassword = generatedPassword.slice(0, length);
    
return finalPassword;
}


function getRandomLower() {
   return randomFun("qwertyuiopasdfghjklzxcvbnm");
}

function getRandomUpper() {
    return randomFun("QWERTYUIOPASDFGHJKLZXCVBNM");
 }
 function getRandomNumber() {
    return random(9);
 }
 function getRandomSymbol() {
    return random('!@#$%^&*(){}[]=<>/,.');
 }
 
 