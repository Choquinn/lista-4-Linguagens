const alunos = [
    { nome:"Ana", media:8.5 },
    { nome:"Bruno", media:6 },
    { nome:"Carla", media:9 },
    { nome:"Davi", media:5.5 }
];

const primeiroAlunoComNotaBaixa = alunos.find(n => n.media < 7);
const alunoComBoaMedia = alunos.some(n => n.media >= 9);
const todosAprovado = alunos.every(n => n.media >= 7);

console.log(primeiroAlunoComNotaBaixa.nome);
console.log(alunoComBoaMedia);
console.log(todosAprovado);