// ! ||--------------------------------------------------------------------------------||
// ! ||                                     função                                     ||
// ! ||--------------------------------------------------------------------------------||
function Pessoas(nome) {
  this.nome = nome;

  this.falar = function () {
    console.log(`Meu nome é ${this.nome}.`);
  };
}

const p1 = new Pessoas("João");
p1.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}.`),
  };
};

const p2 = criarPessoa("Marcos");
p2.falar();
p2.falar();
