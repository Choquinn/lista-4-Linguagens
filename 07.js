const disciplina = {
    nome: "Web",
    cargaHoraria: 60,
    professor: "John"
}

disciplina.cargaHoraria = 80;
disciplina.periodo = 8;
delete disciplina.professor;

console.log(disciplina);
console.log(disciplina.nome);