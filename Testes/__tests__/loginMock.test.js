// 💥 DESAFIO #2 — Login com Mock e Testes Unitários

// 🧩 Regras de Validação:
// Usuário e senha são obrigatórios — se um estiver vazio, lançar erro "Usuário e senha são obrigatórios".
// Senha deve ter pelo menos 6 caracteres — lançar erro "A senha deve conter no mínimo 6 caracteres".
// Simule um “banco de dados” (array com usuários e senhas).
// Verifique:

// Se o usuário existe, senão lançar "Usuário não encontrado".
// Se a senha está correta, senão lançar "Senha incorreta".
// Se tudo estiver certo, retorne { sucesso: true, mensagem: "Login efetuado com sucesso" }

const { login } = require("../loginService");

describe("Login Mock Tests", () => {
  describe("Casos inválidos", () => {
    test("Erro se email ou senha estiverem vazios", () => {
      expect(() => login("", "")).toThrow("Usuário e senha são obrigatórios");
    });

    test("Erro se email ou senha forem espaços vazios", () => {
      expect(() => login("    ", "    ")).toThrow("Usuário e senha são obrigatórios");
    });

    test("Erro se senha for muito curta", () => {
      expect(() => login("giovanna@example.com", "123")).toThrow(
        "A senha deve conter no mínimo 6 caracteres"
      );
    });

    test("Erro se usuário não for encontrado", () => {
      expect(() => login("ellanysouza08@gmail.com", "Estrelaguia12!@")).toThrow(
        "Usuário não encontrado"
      );
    });

    test("Erro se a senha estiver incorreta", () => {
      expect(() => login("giovanna@example.com", "Senhaa123")).toThrow(
        "Senha incorreta"
      );
    });
  });

  describe("Casos válidos", () => {
    test("Retorna sucesso se email e senha estiverem corretos", () => {
      expect(login("fernanda.lima@example.com", "F3rnanda@")).toEqual({
        sucesso: true,
        mensagem: "Login efetuado com sucesso",
      });
    });

    test("Retorna um objeto no login bem-sucedido", () => {
      expect(typeof login("fernanda.lima@example.com", "F3rnanda@")).toBe(
        "object"
      );
    });
  });
});
