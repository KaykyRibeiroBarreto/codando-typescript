let statusAtual: unknown = 1;

let mudaStatus: number = 0;

// Estou afirmando que statusAtual é de fato um numero!
mudaStatus = statusAtual as number

//Outra maneira de afirmar o tipo.
mudaStatus = <number>statusAtual

console.log(mudaStatus)