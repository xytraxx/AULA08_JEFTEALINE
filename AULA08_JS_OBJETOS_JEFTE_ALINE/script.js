//TRABALHANDO COM OBJETOS NO JAVASCRIPT

//criar uma variável do tipo objeto
let pessoa = {
  nome: "Deivid",
  idade: 52,
  altura: 1.58,
  cargo: "estudante",
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.altura);

let carro = {
  nome: "Brasília",
  cor: "amarela",
  marca: "Volkswagen",
};

console.log(carro.nome + " " + carro.cor);

//CRIANDO UM ARRAY DE OBJETOS
let alunos = [
  { nome: "Helô", CGM: 168545000, turma: "2DS" },
  { nome: "Bernardo", CGM: 168545111, turma: "2DS" },
  { nome: "Rogério", CGM: 168545222, turma: "2DS" }
];

console.log(alunos);

console.log(alunos[1]);

console.log(alunos[0].nome);
