"use strict";
function saudacao(nome, saudacao) {
    return `${saudacao || "olá"}, ${nome}`;
}
console.log(saudacao("kayky"));
console.log(saudacao("kayky", "eaí"));
// com o uso de operadores lógicos '||' podemos definir valores padrão para os parâmetros opcionais.
// No exemplo acima, se o parâmetro saudacao não for passado, ele assume o valor "olá".
