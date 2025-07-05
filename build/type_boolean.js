"use strict";
let estaAutenticado = true;
let codeStatus = '';
//Tudo que for diferente de zero, string vazia, undefined, null ou false é considerado verdadeiro.
estaAutenticado = Boolean(codeStatus);
console.log(`Usuário autenticado: ${estaAutenticado}`);
