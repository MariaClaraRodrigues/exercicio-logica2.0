// Conversor de Celsius para Fahrenheit
//Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function convertToFahrenheit(value) {
    return value * 1.8 + 32;
}

let result = convertToFahrenheit(1)
console.log(`O valor em Fahrenheit: ${result}`);