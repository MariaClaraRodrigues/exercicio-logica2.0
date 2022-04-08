//Dia da semana
//Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente.

function diaDaSemana(dia) {
    switch(dia) {
        case '1' :
            console.log('Domingo');
            break;
        case '2':
            console.log('Segunda-feira');
            break;
        case '3' :
            console.log('Terça-feira');
            break;
        case '4' :
            console.log('Quarta-feira');
            break;
        case '5' :
            console.log('Quinta-feira');
            break;
        case '6' :
            console.log('Sexta-feira');
            break;
        case '7' :
            console.log('Sábado');
            break;  
        default :
            console.log('Coloque um valor valido de 1 a 7, por favor.');  
    }
}
diaDaSemana('0');