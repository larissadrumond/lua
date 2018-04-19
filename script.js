// Exercícios:
// 1. Ana e Marcos são amigos. Ana gosta muito de vogais e Marcos
//     gosta de consoantes. Eles fizeram uma aposta e o vencedor é
//     determinado pelo número de vogais/consoantes na palavra.
//     Escreva um programa simples (um input e um botão) que leia 
//     do input uma palavra. Se a palavra tiver mais vogais do que
//     consoantes, colocar na tela que Ana ganhou a aposta.
//     Se a palavra tiver mais consoantes que vogais, colocar na
//     tela que Marcos gosta mais da palavra.
// let vogais = ['a','e'];
let palavra = document.querySelector("input");
let valorinput;
let guardavogal = '';

let vogais = [ 'a', 'e', 'i','o','u'];

function envio (){
    valorinput = palavra.value;

    for ( let letra of valorinput ) { 
        for (let vogal of vogais){
            if(letra == vogal){
                guardavogal += letra;
    
                console.log(guardavogal);
            
            }
       
        }
        

         


        
        
    }
    let v = valorinput.length;
    let c = guardavogal.length;
    if( v - c > c )
        {
            alert('MARCOS GANHOU');
        }else{
            alert('ANA GANHOU!!');
        }

}


