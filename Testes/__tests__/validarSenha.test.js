// ✅ Regras da senha forte:
// Deve ter no mínimo 8 caracteres
// Deve conter pelo menos:
// 1 letra maiúscula (A-Z)
// 1 letra minúscula (a-z)
// 1 número (0-9)
// 1 caractere especial (!@#$%^&*, etc.)

const { validarSenha } = require("../validadorSenha");

describe("Validador de senha forte", () => {
  test("Senha válida", () => {
    expect(validarSenha("Estrelaguia12!@")).toBe(true);
  });

  test("Senha curta", () => {
    expect(() => validarSenha("Estrela")).toThrow("Senha deve ter no mínimo 8 caracteres");
  });

  test("Senha sem letra maiuscula", () => {
    expect(() => validarSenha("estrelaguia12!@")).toThrow
  });

  test("Senha sem letra minuscula", () => {
    expect(() => validarSenha("ESTRELAGUIA12!@")).toThrow("Senha deve conter pelo menos uma letra minúscula");
  });

  test("Senha sem numero", () => {
    expect(() => validarSenha("Estrelaguia!@")).toThrow("Senha deve conter pelo menos um número");
  });

  test("Senha sem caractere especial", () => {
    expect(() => validarSenha("Estrelaguia12").toThrow("Senha deve conter pelo menos um caractere especial"));
  });

  test("Entrada vazia", () => {
    expect(() => validarSenha("")).toThrow("Senha não pode ser vazia");
  });
});
