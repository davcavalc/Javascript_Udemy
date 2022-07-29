// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"; // Não é recomendado fazer isso
const avo = { attr1: "A" };
const pai = { __proto__: avo, attr2: "B" };
const filho = { __proto__: pai, attr3: "C" };
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
  velocidadeMaxima: 200,
  velocidadeInicial: 0,
  acelerarMais(delta) {
    if (this.velocidadeInicial + delta <= this.velocidadeMaxima) {
      this.velocidadeInicial += delta;
    } else {
      this.velocidadeInicial = this.velocidadeMaxima;
    }
  },
  status() {
    return `${this.velocidadeInicial} Km/h de ${this.velocidadeMaxima} Km/h.`;
  },
};

const ferrari = {
  modelo: "F40",
  velocidadeMaxima: 324, // shadowing
};

const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo} : ${super.status()}`;
  },
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log('1) volvo:', volvo.status());
console.log('2) ferrari:', ferrari.status());