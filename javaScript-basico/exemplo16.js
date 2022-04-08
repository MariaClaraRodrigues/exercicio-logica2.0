//Fatorial
//Crie uma função que irá receber um número e retornar o fatorial dele. por exemplo: 3! = 3 * 2 * 1 // 6


function fatorial(num){
    let res = 1;
    for (let i = 1; i <= num; i++){
        res *= i; 
    }
    console.log(`${num}! = ${res}`);
}
fatorial(3);