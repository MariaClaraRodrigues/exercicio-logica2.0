//Conversor de moedas
//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function converteMoeda(valor) {
    let res = valor / 4.75;
    console.log(`${valor} reais equivalem á ${res.toFixed(2)} dólares`);
}
converteMoeda(100);