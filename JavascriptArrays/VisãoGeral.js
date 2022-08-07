console.log(typeof Array, typeof new Array(), typeof []);

let Aprovados = new Array("Carlos", "Bianca", "Ana");
console.log(Aprovados);

Aprovados = ["Carlos", "Bianca", "Ana"];
console.log(Aprovados[0]);
console.log(Aprovados[1]);
console.log(Aprovados[2]);
Aprovados[3] = "Paulo";
Aprovados.push("Carla");
console.log(Aprovados.length);

Aprovados[9] = "Rafael";
console.log(Aprovados.length);
console.log(Aprovados[8] === undefined);
console.log(Aprovados);
Aprovados.sort();
console.log(Aprovados);
delete Aprovados[1];
console.log(Aprovados[1]);
console.log(Aprovados[2]);

Aprovados = ["Bia", "Carlos", "Ana"];
Aprovados.splice(1, 1, "Elemento1", "Elemento2");
console.log(Aprovados);
