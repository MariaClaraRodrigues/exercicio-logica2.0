//IMC
//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function imc(peso, altura) {
    let calculaImc = peso/(altura*altura);
    console.log(`O seu Imc é de ${calculaImc.toFixed(1)}`);
}
imc(50, 1.60);