const prompt = require('prompt-sync')();
let num = Number(prompt('Digite seu numero'));
for (let contador = 1; contador <= 10; contador++){
    console.log(`${num} x ${contador} = ${num * contador}`);
    
}