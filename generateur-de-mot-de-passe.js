const generatePassword = require('generate-password');
function generateRandomPassword (){
    const password = generatePassword.generate({
        length: 15,
        numbers:true,
        symbols:true,
        uppercase:true,
        strict:true,
        
    });
    return password;
}
const RandomPassword = generateRandomPassword();
console.log('Mot de passe',RandomPassword);