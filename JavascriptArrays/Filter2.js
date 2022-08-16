Array.prototype.filter2 = function(callback) {
	const newArray = [];
	for(let i = 0; i < this.length; i++) {
		if(callback(this[i],i,this)) {
			newArray.push(this[i]);
		}
	}
	return newArray;
}

const produtos = [
	{nome:"Notebook", preco:2499, fragil:true},
	{nome:"Ipad Pro", preco:4499, fragil:true},
  {nome:"Copo de Vidro", preco:24.99, fragil:true},
	{nome:"Copo de plástico", preco:12.70, fragil:false},
]

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log("Resultado 2", produtos.filter2(caro).filter2(fragil));
