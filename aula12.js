const livraria = [
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
  },
  {
    titulo: "O Alquimista",
    autor: "Paulo Coelho",
    ano: 1988,
  },
  {
    titulo: "Capitães da Areia",
    autor: "Jorge Amado",
    ano: 1937,
  },
  {
    titulo: "Grande Sertão: Veredas",
    autor: "João Guimarães Rosa",
    ano: 1956,
  },
  {
    titulo: "A Hora da Estrela",
    autor: "Clarice Lispector",
    ano: 1977,
  },
  {
    titulo: "A Sombra do Vento",
    autor: "Carlos Ruiz Zafón",
    ano: 2001,
  },
  {
    titulo: "Harry Potter e as Relíquias da Morte",
    autor: "J.K. Rowling",
    ano: 2007,
  },
  {
    titulo: "A Menina que Roubava Livros",
    autor: "Markus Zusak",
    ano: 2005,
  },
  {
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    ano: 2003,
  },
  {
    titulo: "A Culpa é das Estrelas",
    autor: "John Green",
    ano: 2012,
  },
];

// For of para iterar e verificar os livros publicados antes de 2000

// for (let livro of livraria) {
//   if (livro.ano < 2000) {
//     console.log(livro);
//   }
// }

const filmes = [
  {
    titulo: "A Origem",
    genero: "Ficção Científica",
  },
  {
    titulo: "Titanic",
    genero: "Romance",
  },
  {
    titulo: "Vingadores: Ultimato",
    genero: "Ação",
  },
  {
    titulo: "Coringa",
    genero: "Drama",
  },
  {
    titulo: "Toy Story",
    genero: "Animação",
  },
  {
    titulo: "Teste",
    genero: "Animação",
  },
];

// let contagemFilmes = {}

// filmes.forEach(filme => {
//     if (contagemFilmes[filme.genero]) {
//         contagemFilmes[filme.genero]++
//     }else{
//         contagemFilmes[filme.genero] = 1
//     }
// });

// console.table(contagemFilmes);

// Função para calcular o fatorial de um numero

let fatorial = 1;

function calculoFatorial(value) {
  for (let i = value; i > 0; i--) {
    fatorial *= i;
  }
}

calculoFatorial(5);

// console.log(fatorial);

function fibonnaci() {
  let a = 0;
  let b = 1;
  let temp;
  console.log(a);
  console.log(b);

  for (let index = 3; index <= 10; index++) {
    temp = a + b;
    console.log(temp);

    a = b;
    b = temp;
  }
}

fibonnaci();
