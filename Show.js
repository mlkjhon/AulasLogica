const prompt = require('prompt-sync')();
//if estrutura de condição muito utilizada

// > é maior que
// < é menor que
// >= émaior e igual que
// <= é menor e igual que
//O 'E' no algoritimo é simbolizado pelo "&&"
let reserva_VIP
let reserva_basica
let entrada
let senha_inicial
let senha_final
let sem_cadastro
let cadastro_inicial
let login_inicial
let cadastro_final

entrada = prompt('Seja bem vindo ao nosso site central, Voce ja possui o cadastro? ');

//cadastro novo
if (entrada == 'nao') {
    cadastro_inicial = prompt('Gostaria de se cadastrar?');
}
if (cadastro_inicial == 'sim'){
    login_inicial = prompt ('Digite seu email para cadastro ')
}
if (cadastro_inicial == 'sim'){
    login_inicial = prompt ('Digite sua senha para cadastro ')
}
while (senha_inicial != senha_inicial){
    console.log('Tente novamente');
    senha_inicial = prompt('Digite sua senha para cadastro ')
}

//entrar no site sem cadastro
switch (cadastro_inicial) {
    case 'nao': sem_cadastro = prompt('Gostaria de entrar no site sem conta? ')
        
        break;

    default:
        break;
}
switch (sem_cadastro) {
    case 'sim': console.log ('Voce foi conectado');
        
        break;

    default:
        break;}

switch (sem_cadastro) {
    case 'nao': sem_cadastro = prompt('Gostaria de se cadastrar? ')
        
        break;

    default:
        break;}


//cadastro ja existente 

switch (entrada) {
    case 'sim': cadastro_final = prompt('Digite seu email ')
        
        break;

    default:
        break;
}
switch (entrada) {
    case 'sim': cadastro_final = prompt('Digite sua senha ')
        
        break;

    default:
        break;}

while  (senha_final != senha_final){
     if (entrada == 'sim') {
        console.log('Tente novamente');
        senha_final = prompt('Digite sua senha ')
}
}


//valor
var valor_ingresso_vip = 500
var valor_ingresso_basico = 250

//dinheiro
var pagamento
var desconto_basico = valor_ingresso_basico * 0.1
var desconto_vip = valor_ingresso_vip * 0.05

//total
var conta_vip = valor_ingresso_vip - desconto_vip  
var conta_basica = valor_ingresso_basico - desconto_basico

//organização de ingressos
var ingresso
var compra_ingresso
compra_ingresso = true
var nao_ingresso
nao_ingresso = false

let idade = Number(prompt('Qual sua idade '));
let tenho_ingresso = prompt('Voce comprou o ingresso? ');

//se o ingresso for comprado 'E' tiver ter 18 anos ou mais, pode entrar
if (tenho_ingresso == 'sim' && idade >= 18) {
    console.log('Posso entrar no Show');
}

//se o ingresso não for comprado 'E' tiver ter menos que 18 anos, não pode entrar
if (tenho_ingresso == 'nao' && idade < 18) {
    console.log('Não posso entrar no show');
}

//se o ingresso for comprado 'E' tiver ter menos que 18 anos, não pode entrar
if (tenho_ingresso == 'sim' && idade < 18) {
    console.log('Não posso entrar no Show');
}

//se o ingresso não for comprado 'E' tiver ter 18 anos ou mais, não pode entrar
if (tenho_ingresso == 'nao' && idade >= 18) {
    console.log('Não posso entrar no show');
}

//compra de ingresso caso nao tenha
if (ingresso == 'VIP' && idade >= 18) {
    console.log('Obrigado por comprar nosso ingresso VIP');
}
if (ingresso == 'basico' && idade >= 18) {
    console.log('Obrigado por comprar nosso ingresso basico');
}

if (tenho_ingresso == 'nao' && idade >= 18) {
    var nao_ingresso = prompt('Gostaria de comprar nosso Ingresso? ')
}

//pagamento
if (nao_ingresso == 'sim' && idade >= 18) {
    var Vip_basico = prompt('Gostaria do VIP ou basico? ')
}
if (Vip_basico == 'basico'|| Vip_basico == 'VIP' && idade >= 18) {
    pagamento = (prompt('qual a forma de pagamento? debito e pix tem disconto: '));

}

if (pagamento == 'pix' && Vip_basico == 'basico') {
    console.log (`Seu ingresso esta por ${valor_ingresso_basico}, com desconto de 5% fica ${conta_basica} R$`);
    
}
if (pagamento == 'debito' && Vip_basico == 'basico') {
    console.log (`Seu ingresso esta por ${valor_ingresso_basico}, com desconto de 5% fica ${conta_basica} R$`);
    
}

 if ( pagamento == 'pix' && Vip_basico == 'VIP') {
    console.log (`Seu ingresso esta por ${valor_ingresso_vip}, com desconto de 10% fica ${conta_vip} R$`);
    
}
if ( pagamento == 'debito' && Vip_basico == 'VIP') {
    console.log (`Seu ingresso esta por ${valor_ingresso_vip}, com desconto de 10% fica ${conta_vip} R$`);
    
}

//separação por idade
if (tenho_ingresso == 'nao' && idade < 18) {
    console.log('Voce nao podera comprar nosso ingresso por ser menor de 18 anos.');
}

if (tenho_ingresso == 'sim' && idade >= 18) {
    console.log('Voce ja tem nosso ingresso');
}


if (nao_ingresso == 'nao' && idade >= 18) {
    console.log('Obrigado pela preferencia, qualquer coisa estaremos a disposição');

}



//organização de cadeiras
var cadeira_vip
var cadeira_vip
var cadeira_basica
var cadeira_basica
var verificação_vip1
var verificação_basica1
var verificação_basica2
var verificação_vip2

var vip1_reservada = false
var vip2_reservada = false
var vip3_reservada = false
var vip4_reservada = false
var vip5_reservada = false

var basica1_reservada = false
var basica2_reservada = false
var basica3_reservada = false
var basica4_reservada = false
var basica5_reservada = false
var basica6_reservada = false
var basica7_reservada = false
var basica8_reservada = false
var basica9_reservada = false
var basica10_reservada = false
var basica11_reservada = false
var basica12_reservada = false
var basica13_reservada = false
var basica14_reservada = false
var basica15_reservada = false
var basica16_reservada = false
var basica17_reservada = false
var basica18_reservada = false
var basica19_reservada = false
var basica20_reservada = false
var basica21_reservada = false
var basica22_reservada = false
var basica23_reservada = false
var basica24_reservada = false
var basica25_reservada = false


if (tenho_ingresso == 'sim') {
    ingresso = prompt('qual o seu ingresso? ');
}

if (tenho_ingresso == 'sim' && entrada == 'sim' && ingresso == 'basica') {
    reserva_basica = prompt('Oque voce quer fazer? (reservar ingresso ou verificar reserva) ');
}
    
if (reserva_basica == 'verificar' || 'verificar ingresso') {
    verificação_basica1 = Number(prompt('Qual a cadeira? '))
}

if (reserva_basica == 'reserva' || 'reservar ingresso') {
    verificação_basica1 = Number(prompt('Qual a cadeira? '))


    if (cadeira_basica == true) {
            console.log('já esta reservada') 
    }
         else{
            console.log('Não esta reservada')
            verificação_basica2 = prompt('Gostaria de reserva-la? ')}
            if (verificação_basica2 == 'sim'){
                console.log(`A cadeira ${verificação_basica1} esta reservada para voce`);
                
            }
        }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (tenho_ingresso == 'sim' && entrada == 'sim' && ingresso == 'VIP') {
    reserva = prompt('Oque voce quer fazer? (reservar ingresso ou verificar reserva) ');
}
if (reserva_VIP == 'reserva' || 'reservar ingresso') {
    verificação_vip1 = Number(prompt('Qual a cadeira '))
}
if (reserva_VIP == 'verificar' || 'verificar ingresso') {
    verificação_vip1 = Number(prompt('Qual a cadeira '))
}
    if (cadeira_vip == true) {
            console.log('já esta reservada') 
    }
         else{
            console.log('não esta reservada')
            verificação_vip2 = prompt('Gostaria de reserva-la?')}
            if (verificação_vip2 == 'sim'){
                console.log(`A cadeira ${verificação_vip1} esta reservada para voce`);
                
            }
         else{
            console.log('não esta reservada')
            verificação_vip2 = prompt('Gostaria de reserva-la?')}
            if (verificação_vip2 == 'sim'){
                console.log(`A cadeira ${verificação_vip1} esta reservada para voce`);
                
            }


if (verificação_vip2 == 'sim') {
    console.log(`A cadeira ${verificação_vip1} esta reservado para voce`);
    
}



if (cadeira_vip == 1) {
    if (vip1_reservada == false) {
        vip1_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (cadeira_vip == 2) {
    if (vip2_reservada == false) {
        vip2_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }
}

if (cadeira_vip == 3) {
    if (vip3_reservada == false) {
        vip3_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }
}



if (cadeira_vip == 4) {
    if (vip4_reservada == false) {
        vip4_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (cadeira_vip == 5) {
    if (vip5_reservada == false) {
        vip5_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (cadeira_vip == 5) {
    if (vip1_reservada == false) {
        vip1_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (cadeira_vip >= 1 && cadeira_vip < 6 && idade < 18) {
    console.log('Voce é de menor, não poderá entrar');
}

if (cadeira_vip >= 6) {
    console.log('Sua cadeira não existe');

}

if (cadeira_basica >= 6 && cadeira_basica <= 25 && idade >= 18) {
    console.log('Sua cadeira foi reservada para voce');
}

if (basica1_reservada == 1) {
    if (basica1_reservada == false) {
        basica1_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica2_reservada == 2) {
    if (basica2_reservada == false) {
        basica2_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica3_reservada == 3) {
    if (basica3_reservada == false) {
        basica3_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica4_reservada == 4) {
    if (basica4_reservada == false) {
        basica4_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica5_reservada == 5) {
    if (basica5_reservada == false) {
        basica5_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica6_reservada == 6) {
    if (basica6_reservada == false) {
        basica6_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica7_reservada == 7) {
    if (basica7_reservada == false) {
        basica7_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica8_reservada == 8) {
    if (basica8_reservada == false) {
        basica8_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica9_reservada == 9) {
    if (basica9_reservada == false) {
        basica9_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica10_reservada == 10) {
    if (basica10_reservada == false) {
        basica10_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica11_reservada == 11) {
    if (basica11_reservada == false) {
        basica11_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica12_reservada == 12) {
    if (basica12_reservada == false) {
        basica12_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica13_reservada == 13) {
    if (basica13_reservada == false) {
        basica13_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica14_reservada == 14) {
    if (basica14_reservada == false) {
        basica14_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica15_reservada == 15) {
    if (basica15_reservada == false) {
        basica15_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica16_reservada == 16) {
    if (basica16_reservada == false) {
        basica16_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica17_reservada == 17) {
    if (basica17_reservada == false) {
        basica17_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica18_reservada == 18) {
    if (basica18_reservada == false) {
        basica18_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}

if (basica19_reservada == 19) {
    if (basica19_reservada == false) {
        basica19_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica20_reservada == 20) {
    if (basica20_reservada == false) {
        basica20_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica21_reservada == 21) {
    if (basica21_reservada == false) {
        basica21_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica22_reservada == 22) {
    if (basica22_reservada == false) {
        basica22_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica23_reservada == 23) {
    if (basica23_reservada == false) {
        basica23_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica24_reservada == 24) {
    if (basica24_reservada == false) {
        basica24_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}
if (basica25_reservada == 25) {
    if (basica25_reservada == false) {
        basica25_reservada = true
    } else if (idade) {
        console.log('Esta cadeira ja esta reservada');
    }

}


if (cadeira_basica >= 6 && cadeira_basica <= 25 && idade < 18) {
    console.log('Voce é de menor, não poderá entrar');

}

if (cadeira_basica > 25) {
    console.log('sua cadeira não existe');

}

//fiz sozinho ate aqui