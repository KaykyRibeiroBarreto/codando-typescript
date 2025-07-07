function saudacao(nome: string, saudacao?:string): string {
    return `${saudacao || "olá"}, ${nome}`;
}

console.log(saudacao("kayky"));
console.log(saudacao("kayky", "eaí"));

// A função saudacao recebe dois parâmetros: nome (obrigatório) e saudacao (opcional).
// Se saudacao não for fornecido, ela assume o valor padrão "olá".
