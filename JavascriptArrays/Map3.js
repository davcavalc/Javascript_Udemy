Array.prototype.map2 = function (callback) {
	const meuArray = [];
	for (let i = 0; i < this.length; i++) {
		meuArray.push(callback(this[i], i, this));
	}
	return meuArray;
};

const carrinho = [
	'{"nome":"Borracha", "preco":3.45}',
	'{"nome":"Caderno", "preco":13.90}',
	'{"nome":"Kit de lápis", "preco":41.22}',
	'{"nome":"Caneta", "preco":7.50}',
];

//Retornar um array apenas com os preços
const paraObjeto = (json) => JSON.parse(json);
const apenasPreco = (produto) => produto.preco;
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log("Só os preços dos produtos: ", resultado);
