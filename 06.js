const cursos = [
    {nome: "ADS", turno: "noite", vagas: 40 },
    {nome: "Redes", turno: "tarde", vagas: 30 },
    {nome: "Informática", turno: "manhã", vagas: 35 }
];

const cursosFormatados = cursos.map(n => n.nome.toUpperCase());
const cursosComMuitasVagas = cursos.filter(n => n.vagas >= 35);
const totalDeVagas = cursos.reduce((total, n) => total + n.vagas, 0);
const formatoJSON = JSON.stringify(cursos);
const recuperarJSON = JSON.parse(formatoJSON);

console.log(`1. ${cursosFormatados}`);
console.log("2.", cursosComMuitasVagas);
console.log(`3. ${totalDeVagas}`);
console.log(`4. ${typeof(formatoJSON)}`);
console.log(`5. ${typeof(recuperarJSON)}`);

