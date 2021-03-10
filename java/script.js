  var _length = document.querySelector('input[name="length]');
  var _lowercase = document.querySelector('input[name="lowercase"]');
  var _uppercase = document.querySelector('input[name="uppercase"]');
  var _number = document.querySelector('input[name="number"]');
  var _symbol = document.querySelector('input[name="symbol"]');
  var copy = document.getElementById("copy");
  var generateButton = document.querySelector('interface button')



const key_strings = {

  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase:  'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
   number: '0123456789',
   symbol: '*;<>()[]{}#$?!^|'
};


copy.addEventListener("click", () => {

var _password = document.querySelector('input[type="text"]');
if(_password.value != "" && _password.value != "Include any key string and define the length!"){
  _password.select();
  document.execCommand('copy');
  alert("Password copied!");
}

});