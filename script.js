const clipboard = document.getElementById('clipboard');
const resultEl = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEl = document.getElementById ('uppercase');
const lowercaseEl = document.getElementById ('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEL =  document.getElementById('generate')


const randomFunc = {

lower: getRandomLower,
upper: getRandomUpper,
number: getRandomNumber,
symbol: getRandomSymbol
}

/*code that copies password to clipboard/allowing u to save it in a secure location*/
clipboard.addEventListener('click', () => {

const textarea = document.createElement('textarea');
const password = resultEl.innerText;

if(!password) {return; }

textarea.value = password;
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
textarea.remove();
alert('Password copied');


});



generateEL.addEventListener('click',() =>  {





})