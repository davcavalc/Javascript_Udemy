// ! ||--------------------------------------------------------------------------------||
// ! ||                            Usando a notação literal                            ||
// ! ||--------------------------------------------------------------------------------||
const obj = {};
console.log(obj);
console.log(typeof Object, typeof new Object());

// ! ||--------------------------------------------------------------------------------||
// ! ||                               Usando o new Object                              ||
// ! ||--------------------------------------------------------------------------------||
const obj2 = new Object();
console.log(obj2);

// ! ||--------------------------------------------------------------------------------||
// ! ||                              Funções construtoras                              ||
// ! ||--------------------------------------------------------------------------------||
function Produto(nome, desconto, preco) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desconto);
  };
}

const productOne = new Produto("Caneta", 7.99, 0.15);
const productTwo = new Produto("Notebook", 2998.99, 0.25);
console.log(
  `Preço do produto 1: ${productOne.getPrecoComDesconto()}; Preço do produto 2: ${productTwo.getPrecoComDesconto()}`
);

// ! ||--------------------------------------------------------------------------------||
// ! ||                                Função factoring                                ||
// ! ||--------------------------------------------------------------------------------||
function criarFUncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = new criarFUncionario("João", 7980, 4);
const f2 = new criarFUncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// ! ||--------------------------------------------------------------------------------||
// ! ||                                  Object.create                                 ||
// ! ||--------------------------------------------------------------------------------||
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// ! ||--------------------------------------------------------------------------------||
// ! ||                     Função famosa que retorna um objeto...                     ||
// ! ||--------------------------------------------------------------------------------||
const fromJSON = JSON.parse('{"info": "Sou um JSON."}');
console.log(fromJSON.info);
