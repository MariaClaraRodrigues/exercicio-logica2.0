//Desconto
//Solicite o preço de uma mercadoria e o percentual de desconto. Exiba no console o valor do desconto e o preço a pagar.

function desconto(num1, porcentagemDesconto) {
    let descontos = num1 * (porcentagemDesconto/100);
    let total = num1 - descontos;
    console.log(`O valor do desconto é de ${descontos} reais. E o preço a pagar é de ${total} reais`);
}
desconto(100, 5);