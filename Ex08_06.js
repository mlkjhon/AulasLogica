const prompt = require('prompt-sync')();
let numero1 = prompt('digite um numero ');
let numero2 = prompt('digite outro numero ');

function divisão(){
    let resultado = numero1 / numero2;
    console.log(resultado);
    
}
divisão()