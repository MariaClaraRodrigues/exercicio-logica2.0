//Maior de idade
// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

function maiorDeIdade(anoNascimento) {
    let anoAtual = 2022;
    let idade = anoAtual - anoNascimento;
    if(idade >= 18) {
        console.log(`Você tem ${idade} anos e é maior de idade. Parabéns!`)
    } else {
        console.log(`Você tem ${idade} anos e é menor de idade. Triste!`)
    }
}
maiorDeIdade(2005);