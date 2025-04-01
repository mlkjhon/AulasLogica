const prompt = require('prompt-sync')(); 


console.log('Entregando os notebooks');
for(let nt = 1; nt <=32; nt++){
    let nome = prompt(`Quem é o numero ${nt}: `);
    let presente = prompt (`O(A)${nome} esta presente?`);

    if (presente == 'sim') {
        console.log(`Pegar o notebook ${nt}`);
        console.log(`Levar o notebook até o(a) ${nome}`);
        
    } else{
        console.log(`Não pegar o notebook numero ${nt}`);
        
    }
}


