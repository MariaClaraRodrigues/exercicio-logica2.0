//Desapegada: 
//Crie um programa que me diga quanto cobrar para vender um notebook usado: o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?

function porQuantoDevoVender(valorProduto, desconto) {
    let valorVenda = valorProduto - valorProduto * desconto / 100;
    console.log(`Você deve vender por: R$${valorVenda}`);
}
porQuantoDevoVender(3000, 25);