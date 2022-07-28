const ferrari = {
    modelo: 'F40',
    velocidadeMaxima: 324,
}

const volvo = {
    modelo: 'P40',
    velocidadeMaxima: 200
}

console.log("1)", ferrari.__proto__);
console.log("2)", ferrari.__proto__ === Object.prototype);
console.log("3)", volvo.__proto__ === Object.prototype);
console.log("4)", Object.prototype.__proto__);
console.log("5)", Object.prototype.__proto__ === null);

function meuObjeto() { }
console.log("6)", typeof Object, typeof meuObjeto);