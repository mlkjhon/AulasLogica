const prompt = require('prompt-sync')();

//Exercicio 01
for(let nt = 1; nt <=40; nt++){
   if( let = impar = nt % 2){
  if(nt => 1)
    console.log(nt);
    
   }
}

//exercicio 02
console.log("====================================");
console.log("⚽           Mega-Sena           ⚽");
console.log("====================================");
let seu_numero
let numero_mega
let numeros = ''
let mega = ''

for (let seu_numero = 1; seu_numero <=6; seu_numero++) {
    let seu_numero = Math.floor(Math.random()*6) + 1;

    numeros = numeros + seu_numero
   
}
    

    for(let numeros_mega = 1; numeros_mega <=60; numeros_mega++){
        let numero_mega = Math.floor(Math.random()*60) + 1
        mega = mega + numero_mega

    }



console.log(`Numero da Mega é ${mega}`);

console.log(`seu numero é ${numeros}`);

if (numeros === numero_mega) {
    console.log('Voce esta rico');
    
}
if (numeros != numero_mega) {
    console.log('Voce perdeu na mega');
    
}
//Exercicio 05
console.log("=======================================================================================================================================================================");
let soma_idade_m=0
let qntdM=0
let soma_idade_f=0
let qntdF=0
for(var x = 1;  x <= 10; x++){
   let idade = Number(prompt('Digite sua idade '));
   let sexo = Number(prompt('Digite seu sexo '))
   if (sexo == 'M') {
    qntdM++;
    soma_idade_m = soma_idade_m + idade
   } else if (sexo == 'F'){
    qntdF++;
    soma_idade_f = soma_idade_f + idade
   } else {
    console.log('Eca');
    
   }
}
console.log(`A media dos M é de ${soma_idade_m / qntdM /10}`);
console.log(`A media dos F é de ${soma_idade_f / qntdF/10}`);
console.log(`A media do grupo é de ${soma_idade_f / soma_idade_m/10}`);

