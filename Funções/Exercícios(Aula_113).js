// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Questão 01                                   ||
// ! ||--------------------------------------------------------------------------------||
function calculadoraSimples(a, b) {
 console.log(`Soma = ${a + b}`);
 console.log(`Subtração = ${a - b}`);
 console.log(`Multiplicação = ${a * b}`);
 console.log(`Divisão = ${Math.floor(a / b)}`);
}

calculadoraSimples(2, 234);

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Questão 02                                   ||
// ! ||--------------------------------------------------------------------------------||
function tresTirangulos(AB, BC, AC) {
 if (AB != BC && AB != AC) {
  console.log("Triângulo Escaleno");
 } else if (AB == BC && AB != AC) {
  console.log("Triângulo Isósceles");
 } else if (AB == BC && AB == AC) {
  console.log("Triângulo Equilátero");
 } else {
  console.log("Valores inválidos");
 }
}

tresTirangulos(12, 14, 34);
tresTirangulos(12, 12, 34);
tresTirangulos(34, 34, 34);

// ! ||--------------------------------------------------------------------------------||
// ! ||                                   Questão 03                                   ||
// ! ||--------------------------------------------------------------------------------||
const exponenciacao = (b, e) => {
 return Math.pow(b, e);
};
console.log(`Resultado da exponenciação: ${exponenciacao(2, 3)}.`);
console.log(`Resultado da exponenciação: ${exponenciacao(4, 10)}.`);
console.log(`Resultado da exponenciação: ${exponenciacao(10, 3)}.`);
