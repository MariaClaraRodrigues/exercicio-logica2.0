//Jantar
//Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.

function jantar(valor) {
    let taxaDoGarcom = valor * 0.1;
    let totalDoJantar = valor + taxaDoGarcom
    console.log(`A taxa do garçom é de 10% equivale a ${taxaDoGarcom} reais, e o valor total do jantar é de ${totalDoJantar} reais.`);
}
jantar(200);