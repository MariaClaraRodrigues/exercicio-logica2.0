//Semaforo, sinal ou sinaleira? 
//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function semaforo() {
    let verde = 0;
    let tempoFarolVerde = 5;
    while (tempoFarolVerde > verde) {
        console.log(`${tempoFarolVerde} segundo(s) para o farol vermelho`);
        tempoFarolVerde--;
        if (tempoFarolVerde == 0) {
            console.log('SINAL VERMELHO PARE AGORA!');
        }
    }
    
    let vermelho = 0;
    let tempoFarolVermelho = 7;
    while (tempoFarolVermelho > vermelho) {
        console.log(`${tempoFarolVermelho} segundo(s) para o farol amarelo`);
        tempoFarolVermelho--;
        if (tempoFarolVermelho == 0) {
            console.log('SINAL AMARELO PRESTE ATENÇÃO!');
        }
    }
    
    let amarelo = 0;
    let tempoFarolAmarelo = 3;
    while (tempoFarolAmarelo > amarelo) {
        console.log(`${tempoFarolAmarelo} segundo(s) para o farol verde`);
        tempoFarolAmarelo--;
        if (tempoFarolAmarelo == 0) {
            console.log('SINAL VERDE SIGA EM FRENTE COM CUIDADO!');
        }
    }
    
    //return semaforo();
};
semaforo();