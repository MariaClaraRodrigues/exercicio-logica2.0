//Viagem
//Calcule o tempo de uma viagem de carro. Pergunte a distância a percorrer e a velocidade média esperada para a viagem.

function tempoViagem(distanciaKm, velocidadeKm) {
    let tempo = distanciaKm / velocidadeKm;
    console.log(`O tempo estimado é de ${tempo} hora(s).`)
}
tempoViagem(30, 10);