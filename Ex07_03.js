const prompt = require('prompt-sync')();

let numero = Number(prompt('Digite o Numero A'));


if(numero % 2 == 0){
    console.log('Seu numero é par');
    
}
else{
    console.log('Seu numero não é impar');
    
}
