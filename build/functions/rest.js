"use strict";
/* function totalVendas(venda1: number, venda2: number, venda3: number, venda4:number){
    const total = venda1 + venda2 + venda3 + venda4;

    console.log(total)

    return total
}

totalVendas(10, 30, 50, 10) */
/* function totalVendas(...vendas: number[]):void{
    const quantidadeVendas = vendas.length;

    console.log(`Você fez ${quantidadeVendas} vendas hoje!`)
}

totalVendas(10, 30, 25); */
function soma(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(soma(8, 5, 7));
// o rest operator (...) é usado para agrupar um número indefinido de argumentos em um array.
// O rest operator deve ser o último parâmetro da função.
// o retorno do reduce é o valor acumulado, que é atualizado a cada iteração do array.
// O reduce recebe dois parâmetros: o primeiro é uma função que recebe o acumulador e o
// valor atual, e o segundo é o valor inicial do acumulador (neste caso, 0).
