// 💥 DESAFIO: Validador de Senhas Fortes

// ✅ Regras da senha forte:
// Deve ter no mínimo 8 caracteres
// Deve conter pelo menos:
// 1 letra maiúscula (A-Z)
// 1 letra minúscula (a-z)
// 1 número (0-9)
// 1 caractere especial (!@#$%^&*, etc.)

function validarSenha(senha) {
  if (!senha) {
    throw new Error("Senha não pode ser vazia");
  }

  let requisitos = [
    { regex: /.{8,}/, message: "Senha deve ter no mínimo 8 caracteres" },
    {
      regex: /[A-Z]/,
      message: "Senha deve conter pelo menos uma letra maiúscula",
    },
    {
      regex: /[a-z]/,
      message: "Senha deve conter pelo menos uma letra minúscula",
    },
    { regex: /[0-9]/, message: "Senha deve conter pelo menos um número" },
    {
      regex: /[^a-zA-Z0-9\s]/,
      message: "Senha deve conter pelo menos um caractere especial",
    },
  ];

  for (const {regex, message} of requisitos) {
    if (!regex.test(senha)) {
      throw new Error(message);
    }
  }

  return true;
}

module.exports = { validarSenha };
