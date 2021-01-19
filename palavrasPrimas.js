/* passo 1 =  definir se a letra e maiscula ou minuscula e ; OK
   passo 2 =  somar os valores das letras ; OK
   passo 3 =  comparar se palavra e prima ou nao ; OK
   passo 4 =  passar parametros das functions anteriores pra comparacao ; OK
   */ 


function somaPalavras (palavra){      // fazendo a soma da conversao de cada letra
    let totalDaSoma = 0
    for(let i = 0; i < palavra.length; i++){
        totalDaSoma += conversaoDeLetras(palavra[i])
    }
    return totalDaSoma
}

function conversaoDeLetras (letra){   // conferindo se a letra e maiscula ou minuscula e trandormando as em numeros
    if( letra.charCodeAt(0) < 91){

        return letra.charCodeAt(0) - 38
    }
    else if(letra.charCodeAt(0) > 96){

        return letra.charCodeAt(0) - 96
    }

}


function ePrimo(palavraCovertida){   // compara se o numero e primo ou nao 
    if ( palavraCovertida > 2 && palavraCovertida % 2 === 0 ){
        return false;
    }
    else if (palavraCovertida === 3){
        return false;
    }
    else{        
        for (let i = 3; i <= palavraCovertida / 2; i ++){
            if (palavraCovertida % i == 0){
                console.log()
                return false;
            }else {
                return true;
            }
        }   
    }  
}
let testCase = [`a` , `URFN` , `NpN`]
 
function exibicao (entrada){
    for(let i = 0; i < entrada.length; i++){
        let guardaSomaPalavras = somaPalavras(entrada[i])
        if (ePrimo(guardaSomaPalavras) == false){
            console.log(`Nao e primo !`)
        } else{
            console.log(`E primo !`)
        }
    }
}
exibicao(testCase)