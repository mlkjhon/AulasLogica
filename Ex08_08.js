function SenhaAleatoria(qtdeCaracteres){
    let listaCaracteres = ['zxcvbnm,.;:]}[{asdfghjklçpoiuytrewq123456789=+-_)(*&¨%$#@!"|><?°/^~ºª'];
    let senha = '';
    for(let x = 1; x <= qtdeCaracteres; x++){
        var posSorteada = Math.floor(Math.random() * 6 )
    senha = senha + listaCaracteres [posSorteada]
    
    }
    return senha;
}
let senha_gerada = SenhaAleatoria(8)
console.log(senha_gerada);

