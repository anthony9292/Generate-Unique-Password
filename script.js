var charset= "01234567889abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ!@#$%^&*()_+=?<>:{[";
var passwordLength= 16;
var password:"";
for(var i=0; i<passwordLength;i++) {
   var randomnum = Math.floor(math.random()*charset.length);
   password += charset.substring(randomnum, randomnum+1);


}
     
