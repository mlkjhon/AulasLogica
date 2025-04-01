const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite seu ano de nascimento'));

if (numero <= 2007){
console.log('Maior de idade');

}
else {
    console.log('Menor de idade');

    }