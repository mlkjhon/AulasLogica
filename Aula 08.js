const prompt = require('prompt-sync')();
let lado1 = Number(prompt('Digite o lado 1 = '));
let lado2 = Number(prompt('Digite o lado 2 = '));
let lado3 = Number(prompt('Digite o lado 3 = '));

if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1 ) {
console.log('Seu triangulo é equilatero');


}else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
console.log('Seu triangulo é escaleno');

}
else {
    console.log('Seu triangulo é isósceles');
    
}

var vendas = Number(prompt('Valor da venda: '));
var horas = Number(prompt('Horas Trabalhadas Semanais: '));

if (vendas >5000 || horas > 40) {
    console.log('Tem direito ao Bonus');
    
}
else{
    console.log('Não tem direito ao Bonus');
    
}

var num1 = prompt('Digite uma caractere: ');

if (num1 == 'a'||num1 == 'e'|| num1 == 'i'|| num1 ==  'o'|| num1 == 'u'){
    console.log(`${num1}É uma vogal`);
    
}
else{
    console.log(`${num1}É uma consoante`);
    
}