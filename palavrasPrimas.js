/* passo 1 =  definir se a letra e maiscula ou minuscula e ; OK
   passo 2 =  somar os valores das letras ; OK
   passo 3 =  comparar se palavra e prima ou nao ; OK
   passo 4 =  passar parametros das functions anteriores pra comparacao ; OK
   */ 

function conversaoDeLetras (letraPraConversao){   // conferindo se a letra e maiscula ou minuscula e trandormando as em numeros
    if( letraPraConversao.charCodeAt(0) < 91){

        return letraPraConversao.charCodeAt(0) - 38
    }
    else if(letraPraConversao.charCodeAt(0) > 96){

        return letraPraConversao.charCodeAt(0) - 96
    }

}

function somaLetras (letraConvertida){      // fazendo a soma da conversao de cada letra
    let totalDaSoma = 0
    for(let i = 0; i < letraConvertida.length; i++){
        totalDaSoma += conversaoDeLetras(letraConvertida[i])
    }
    return totalDaSoma
}

function comparaPrimo(resultadoDaSoma){   // compara se o numero e primo ou nao 
    if ( resultadoDaSoma > 2 && resultadoDaSoma % 2 == 0 ){
        return false;
    }
    else if (resultadoDaSoma == 1){
        return true;
    }
    else{
        
        let divisores = 0
        for (let i = 1; i <= resultadoDaSoma / 2; i ++){
            if (resultadoDaSoma % i == 0){
                divisores += 1
            }
        }
        if (divisores == 1){
            return true;     
        }
        else{
            return false;
        }
    }  
}
let test = somaLetras(`Ab`)

if (comparaPrimo(test) == false){
    console.log(`Nao e primo !`)
} else{
    console.log(`E primo !`)
}

