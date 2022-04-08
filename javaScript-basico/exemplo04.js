//Quero lucrar: 
//Crie um programa que me diga como lucrar nesta situação: quero vender uma bicicleta que 60% do seu valor é R$300, por quanto devo vendê-la para lucrar 25%?

let valorbicicleta = 300 * 100 / 60;
let lucro = valorbicicleta * 0.25 + valorbicicleta;

console.log(`Para conseguir ter lucro, você precisara vender por: R$${lucro}`);