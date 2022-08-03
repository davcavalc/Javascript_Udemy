// CÓDIGO NÃO EXECUTÁVEL

// procedural
processamento(valor1, valor2, valor3);

// OO
objeto = {
  valor1,
  valor2,
  valor3,

  processamento() {
    // ...
  },
};

objeto.processamento();

/**
 * PRINCÍPIOS IMPORTANTES
 * 1) Abstração
 * 2) Encapsulamento
 */

class Pessoa {
  constructor(nome, idade, sexo, dataDeNascimento) {
    this.idade = idade;
    this.nome = nome;
    this.sexo = sexo;
    this.dataDeNascimento = dataDeNascimento;
  }

  apresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, ${this.sexo} e minha data de nascimento é ${this.dataDeNascimento}.`
    );
  }
}

let person = new Pessoa("Fulano", 20, "masculino", "21/07/1989");
person.apresentar();
