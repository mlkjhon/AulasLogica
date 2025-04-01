const prompt = require('prompt-sync')();

let a = Number(prompt('Digite o Numero A'));
let b = Number(prompt('Digite o Numero B'));

if (a > b ){
    console.log('O "a" nao é igual que "b"')
};

if (a < b ){
    console.log ('O "b" nao é igual que o "a"')
}; 

if (a==b){
    console.log('O "a" é igual ao "b"')
}
