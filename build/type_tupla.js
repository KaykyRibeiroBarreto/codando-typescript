"use strict";
//Tuplas não existem no JavaScript, mas existem no TypeScript
// Tuplas são arrays com tipos fixos e ordem definida
let alunos = [
    ["João", 20],
    ["Maria", 22],
    ["Pedro", 19]
];
alunos.forEach(aluno => {
    console.log(`Nome: ${aluno[0]}, Idade: ${aluno[1]}`);
});
