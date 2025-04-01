//estruturas condicionais aninhadas
//Switch case
const prompt = require('prompt-sync')();

let valor_compra = 120;
let cliente_vip = true;

if (valor_compra >= 100) {
    if(cliente_vip== true){
        console.log(`Voce ganhou R$ ${valor_compra * 0.1}`);
    } else{ 
        let desconto = valor_compra * 5 / 100;
    console.log(`Voce ganhhou R$ ${desconto} de desconto`);
}
    
    
    
} else {
   let restante = 100 - valor_compra;
   console.log(`compre mais R$ ${restante} e ganhe desconto`);
   
    
}
