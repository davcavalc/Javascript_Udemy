const numeros = [1, 2, 3, 4, 5];
// for com propósito

let resultado = numeros.map(function (e) {
	return e * 2;
});

console.log(resultado, numeros);

// função 1
const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
