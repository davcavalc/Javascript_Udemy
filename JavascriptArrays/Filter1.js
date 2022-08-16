const produtos = [
	{nome:"Notebook", preco:2499, fragil:true},
	{nome:"Ipad Pro", preco:4499, fragil:false},
        {nome:"Copo de Vidro", preco:24.99, fragil:true},
	{nome:"Copo de plástico", preco:12.70, fragil:false},
]

console.log(produtos.filter(function(p) {
	return true;

}))

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log("Resultado 2", produtos.filter(caro).filter(fragil));
