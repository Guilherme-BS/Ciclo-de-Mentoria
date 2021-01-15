/*
passo 1 = transformar as palavras em numeros
passo 2 = comparar se a palavra e ordenada ou nao 
passo 3 = imprimir resultados anteriores de forma correta
 */

function palavraPraNumero (letra){   // conferindo se a letra e maiscula ou minuscula e trandormando as em numeros
    
    if( letra.charCodeAt(0) < 91){

        let letraConvertida = letra.charCodeAt(0) - 38
        console.log(letraConvertida)
    }
    else if(letra.charCodeAt(0) > 96){

        let letraConvertida = letra.charCodeAt(0) - 96
        console.log(letraConvertida)
    }

}

palavraPraNumero(`abc`)