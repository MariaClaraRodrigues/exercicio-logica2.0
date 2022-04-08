//É par
//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisaoDeNumeros(num1, num2) {
    let res = num1 / num2;
    if(res%2 == 0) {
        console.log(`${res} esse número é par!`)
    } else {
        console.log(`${res.toFixed(1)} esse número é impar!`)
    }
}
divisaoDeNumeros(8, 4);