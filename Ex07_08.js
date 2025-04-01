const prompt = require('prompt-sync')();
let ganhos = Number(prompt('Digite seu ganho '));
var conta1

if(ganhos>5000){
conta1 = ganhos * 0.05;
console.log(`Sua comissão é de 5%, que será de ${conta1} `);

}
else{
    conta1 = ganhos * 0.03;
    console.log(`Sua comissão é de 3%, que sera de ${conta1} `);
    
}
