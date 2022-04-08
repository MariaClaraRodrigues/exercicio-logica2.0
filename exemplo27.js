//Calculadora
//Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

function calculadora(operacao, valor1, valor2) {
    let res;
    if(operacao == 'soma') {
        res = valor1 + valor2;
    } else if(operacao == 'subtração') {
        res = valor1 - valor2;
    } else if(operacao == 'multiplicação') {
        res = valor1 * valor2;
    } else if(operacao == 'divisão') {
        res = valor1 / valor2;
    } else {
        console.log('Digite uma operação, please!');
    }
    console.log(`A ${operacao} de ${valor1} com ${valor2} = ${res}`);
}
calculadora('subtração', 2, 2);