//Conta bancária
//Vamos criar uma conta bancária com as 3 operações básicas? rs
//a) A conta deverá iniciar com o saldo de 100
// b) Deverá ser possível escolher uma operação em forma de string: 'depositar', 'sacar', 'consultar saldo'
// c) Deverá ser possível passar 1 valor para a operação escolhida
// d) Deverá retornar o resultado e imprimir no console o saldo atual

function contaBancaria(operacao, valor) {
    let saldo = 100;
    if(operacao == 'depositar') {
        saldo += valor;
        console.log(saldo);
    } else if(operacao == 'sacar') {
        saldo -= valor;
        console.log(saldo);
    }  else if(operacao == 'consultar saldo') {
        console.log(`Esse é o seu saldo atual: ${saldo}.`);
    }
}
contaBancaria('consultar saldo', 10);