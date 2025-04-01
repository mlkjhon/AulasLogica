const prompt = require('prompt-sync')();
let nota1 = Number(prompt('Qual a primeira nota do Aluno'));
let nota2 = Number(prompt('Qual a segunda nota do Aluno'));

let media
media = (nota1+nota2)/2

if (media >= 7){
    console.log('Aprovado');
    
}
else {
    console.log('Reprovado');
    
}

