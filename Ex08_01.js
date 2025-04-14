const prompt = require('prompt-sync')();

contador = 0

while(true){
    if(contador == 3){
    break
    }

    let nome = prompt ('Qual seu nome? ');

    function saudação(){
        console.log(`${nome} tenha um bom dia`);
}

saudação()
contador++;
}
