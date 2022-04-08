//Par ou Impar
//Crie uma função que determina se um número é par ou impar.

function parOuImpar(numero) {
    if(numero%2 == 0) {
        console.log(`${numero} é par.`);
    } else if(numero == 1) {
        console.log(`${numero} é impar.`);
    }
    return console.log('Digite um número, por favor.');
}
parOuImpar();