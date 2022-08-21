const alunos = [
	{ nome: "João", nota: 7.9 },
	{ nome: "Maria", nota: 9.2 },
];

// 1 - Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
	total1 += alunos[i].nota;
}

console.log("Total 1: ", total1 / alunos.length);

//Declarativo
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log("Total2: ", total2 / alunos.length);