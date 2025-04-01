const prompt = require('prompt-sync')(); 

console.log("====================================");
console.log("⚽      JOGO DA ADIVINHAÇÃO      ⚽");
console.log("====================================");
let numero_secreto = Math.floor(Math.random()*100) + 1;
let acertou = false
let tentativas = 0;

while (acertou == false) {
    let chute = Number(prompt('Digite um numero entre 1 e 100: ' ))
tentativas = tentativas + 1;
    if(chute == numero_secreto){
        
        console.log('Voce acertou');
        console.log(`Voce acertou em ${tentativas} tentativas `);
        
      break
    } else if (chute > numero_secreto){
        console.log('Menor');
        
    }

     else if (chute < numero_secreto){
        console.log('Maior');
        
    }


}
