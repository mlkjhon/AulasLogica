// Sistema de Pedidos de Restaurante
const prompt = require('prompt-sync')();
console.log('===============================================================');
console.log('                    Bem vindo ao nosso site                    ');
console.log('===============================================================');

let cadeiras = [1, 2, 3, 4, 5]
let cadeiras_reservadas = []
let cardapio = ['prato feito', 'Sushi'] 


//função da reserva
function reserva(cadeira_escolhida) {

    if (cadeiras_reservadas.includes(cadeira_escolhida)) {
        console.log('Ja esta reservada');
    }

    else if (cadeiras.includes(cadeira_escolhida)) {
        let cadeira_disponivel = prompt(`Cadeira ${cadeira_escolhida} esta disponivel gostaria de reserva-la?`);
        if(cadeira_disponivel == 'sim'){
            console.log(`Cadeira ${reservas} reservada!`);
            cadeiras_reservadas.push(cadeira_escolhida)
        }
    } 
    else {
        console.log('Sua cadeira não existe');

    }
   
}
//repetição de reserva e cardapio
while (true) {
    let cliente = prompt('Oque voce deseja?(cardapio ou reserva de mesas) ').toLowerCase();

    if (cliente === 'cardapio') {
        console.log(cardapio);
    }
    if (cliente === 'reserva' || cliente === 'reserva de mesas') {
        var reservas = Number(prompt('escolha uma cadeira(1-5) '))
    }

    if (reservas >= 1 && reservas <= 5) {
        reserva(reservas)
    } else if(reservas > 5) {
        console.log('Sua cadeira não existe');

    }


// Adionando coisas ao cardapio
if(cliente === 'cardapio'){
var adicionar = prompt ('Gostaria de dar uma sugestão de comida? ')
}  

if (adicionar == 'sim'){
    var senha = prompt ('Qual a senha? ') //Senha para administradores
} else{
    console.log('Ok');
    break;
}


if (senha == 123){
    console.log('Entrou com Sucesso!');
    var comida = prompt ('Qual? ')
    
} else {
    console.log('Errado👍');  
} 

if (adicionar = true){
   cardapio.push(comida)
   console.log(`Sua ${comida} foi adicionado com sucesso!`);
   
} else if (adicionar = Number){
    console.log('Isso nao é uma comida');
    
}

let acabar = prompt('Continuar? (S/N) ').toLowerCase();

    if (acabar == 'n') {
    break;
} else{

}

}