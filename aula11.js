let professor = {
    nome: 'Stark Parker',
    materia: 'Física',
    notas: {
        aluno1: [5,10],
        aluno3: [5,8]
    }
}

let notas = professor.notas;
let soma = 0
let mediaProfessor;
let qtdAlunos = 0;

for (let key in notas) {
    soma += (notas[key].reduce((acumulador, value) => acumulador + value, 0)) / notas[key].length;
    qtdAlunos++
}

mediaProfessor = soma / qtdAlunos;

if (mediaProfessor >= 7) {
    console.log('A turma esta com as notas dentro da média exigida.');
    console.log('Média: ', mediaProfessor);
}else{
    console.log('A turma esta com as notas abaixo da média exigida.');
    console.log('Média: ', mediaProfessor);
}