const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// Sem callback
let notasBaixas = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i]);
  }
}

console.log("1)", notasBaixas);

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log("2)", notasBaixas2);

// Com callback como arrow function
const notasMenoresQue7 = (notas) => notas < 7;
const notasBaixas3 = notas.filter(notasMenoresQue7);
console.log("3)", notasBaixas3);

// Teste
const mensagem = () => console.log("4 - Olá Mundo!!");
mensagem();
