// 💥 DESAFIO #2 — Login com Mock e Testes Unitários

// 🧩 Regras de Validação:
// Usuário e senha são obrigatórios — se um estiver vazio, lançar erro "Usuário e senha são obrigatórios".
// Senha deve ter pelo menos 6 caracteres — lançar erro "A senha deve conter no mínimo 6 caracteres".
// Simule um “banco de dados” (array com usuários e senhas).
// Verifique:

// Se o usuário existe, senão lançar "Usuário não encontrado".
// Se a senha está correta, senão lançar "Senha incorreta".
// Se tudo estiver certo, retorne { sucesso: true, mensagem: "Login efetuado com sucesso" }

const {users} = require('./database/users.js');

function login(email, senha) {
  if (!email || !senha) {
    throw new Error("Usuário e senha são obrigatórios");
  }

  if(!email.trim() || !senha.trim()) {
    throw new Error("Usuário e senha são obrigatórios");
  }

  if (senha.length < 6) {
    throw new Error("A senha deve conter no mínimo 6 caracteres");
  }

  const usuario = users.find((u) => u.email === email);

  if (!usuario) {
    throw new Error("Usuário não encontrado");
  }

  if (usuario.senha !== senha) {
    throw new Error("Senha incorreta");
  }

  return { sucesso: true, mensagem: "Login efetuado com sucesso" };
}

module.exports = { login };