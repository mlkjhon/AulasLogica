const prompt = require('prompt-sync')();
function Linha(){
    console.log('- - - - - - - - - - - - - - - -'); 
}

function Cabecarioescola (nomeescola){
    Linha();
    console.log(nomeescola);
    Linha();
}

let contador = 0

while(true){
    if (contador == 1){
        break
    }

Cabecarioescola('Escola')
Cabecarioescola('Sesi')
contador++;
}


let numero1 = prompt('digite um numero ');
let numero2 = prompt('digite outro numero ');

function soma(){
    let resultado = numero1 * numero2;
    console.log(resultado);
    
}
soma()

//retorno de uma função (com parametro e retorno)
function media (n1, n2){
    let resultado = (n1 + n2) / 2;
    return resultado
}
let valor = media (5,8)
