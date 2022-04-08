//Números
//Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

function numerosComparacao(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} é maior que ${num2}.`);
    } else if(num1 < num2) {
        console.log(`${num1} é menor que ${num2}.`);
    } else {
        console.log(`${num1} é igual a ${num2}.`)
    }
}
numerosComparacao(5,5);