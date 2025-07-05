"use strict";
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 0] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 1] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 2] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 3] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 4] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 5] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 6] = "Domingo"; // 6
})(DiaDaSemana || (DiaDaSemana = {}));
const hoje = DiaDaSemana.Quarta;
console.log(hoje); // 2
console.log(DiaDaSemana[2]); // "Quarta"
