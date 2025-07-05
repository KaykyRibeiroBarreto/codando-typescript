enum DiaDaSemana {
  Segunda,   // 0
  Terca,     // 1
  Quarta,    // 2
  Quinta,    // 3
  Sexta,     // 4
  Sabado,    // 5
  Domingo    // 6
}

const hoje: DiaDaSemana = DiaDaSemana.Quarta;

console.log(hoje); // 2
console.log(DiaDaSemana[2]); // "Quarta"
