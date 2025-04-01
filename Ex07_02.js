const prompt = require('prompt-sync')();

//perguntar ao cidadao qual seu numero 'a' e 'b'
let a = Number(prompt('Digite o Numero A'));
let b = Number(prompt('Digite o Numero B'));

//aqui o computador vai ver qual dos numeros e maior, menor ou igual ao que o cidadao pediu
if (a > b ){
    console.log('O "a" é maior que "b"')
};

if (a < b ){
    console.log ('O "a nao é maior que o "b"')
}; 

if (a==b){
    console.log('O "a" é igual ao "b"')
};