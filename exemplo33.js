//Ímpar/Par
//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function imparOuPar(numero) {
    if(numero%2 == 0) {
        console.log('Par');
    } else {
        console.log('Ímpar');
    }
}
imparOuPar(2);