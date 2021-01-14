/* passo 1 =  definir se a letra e maiscula ou minuscula e ; OK
   passo 2 =  somar os valores das letras ; OK
   passo 3 =  comparar se palavra e prima ou nao ; OK
   passo 4 =  passar parametros das functions anteriores pra comparacao
   */ 

function letraPraNumero (letra){   // conferindo se a letra e maiscula ou minuscula e trandormando as em numeros
    if( letra.charCodeAt(0) < 91){

        return letra.charCodeAt(0) - 38
    }
    else if(letra.charCodeAt(0) > 96){

        return letra.charCodeAt(0) - 96
    }

}

function somaLetras (soma){     
    let tot = 0
    for(let i = 0; i < soma.length; i++){
        let conversaoDasLetras = letraPraNumero(soma[i])
        tot += conversaoDasLetras
    }
    return tot
}

function comparaPrimoOuN(valor){   // compara se o numero e primo ou nao 
    
    if ( valor > 2 && valor % 2 == 0 ){

        console.log(`nao e primo !`)
    
    }
    
    else if(valor == 1){
        console.log(`E primo `)

    }

    else{

        let divisores = 0
        for (let i = 1; i <= valor; i ++){
            
            if (valor % i == 0){
                divisores += 1
                
            }
        }
        if (divisores == 2){
            
            console.log(`E primo!`) 
            
        }
        else{
            console.log(`Não e primo`)
        }
        
        

    }

    
    
}

let test = somaLetras(`A`)
comparaPrimoOuN(test)

