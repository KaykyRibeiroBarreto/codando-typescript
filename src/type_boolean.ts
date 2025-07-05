let estaAutenticado: boolean = true;

let codeStatus: string = '';

//Tudo que for diferente de zero, string vazia, undefined, null ou false é considerado verdadeiro.
estaAutenticado = Boolean(codeStatus);

console.log(`Usuário autenticado: ${estaAutenticado}`);