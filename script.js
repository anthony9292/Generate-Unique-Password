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

    const length = +lengthEL.value;
    const hasLower =lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasSymbol,hasNumber,length);
})


function generatePassword(lower, upper, number, symbol, length) {

let generatePassword = '';

const typesCount = lower + upper + number + symbol;
;
const typesArr = [{lower},{upper},{symbol},{number}].filter(item => 
    Object.values(item)[0]);


    if(typesCount === 0) {

        return '';
    }
//loop//
for ( let i=0; i<length; i+typesCount) {

typesArr.forEach(type => {  const funcName = Object.keys(type)[0];
    generatePassword += randomFunc[funcName]();


   });
 
}
 


 const finalPassword = generatePassword.slice(0, length);

      return finalPassword; 

}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
}

function getRandomUpper() {

    return String.fromCharCode(Math.floor(Math.random()*26) + 65);
}

function getRandomSymbol() {
    const symbol = '!@#$%^&*(){}[]=<>/,.'
    return symbol = [Math.floor(Math.random()*symbol.length)];
}

function getRandomNumber() {

return +string.fromCharCode*(Math.floor(Math.random()*10)+ 48);
}