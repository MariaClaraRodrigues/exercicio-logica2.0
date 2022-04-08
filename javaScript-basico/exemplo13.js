//Tabuada
//Faça um programa que dado um número, imprime no (console.log) a tabuada do mesmo de 1 a 10.

function tabuada(n) {
    console.log(`Tabuada é do: ${n}`)
    for(let i = 0; i <= 10; i++) {
        let res = n * i;
        console.log(`${n} x ${i} = ${res}`);
    }
}
tabuada(5);