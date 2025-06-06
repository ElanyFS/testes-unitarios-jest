# 🧪 Testes Unitários com Jest

Projeto desenvolvido para praticar testes unitários em JavaScript utilizando o **Jest** com **100% de cobertura de código**.

## 📂 Estrutura dos Testes

- `soma.test.js` - Soma de números
- `temperatura.test.js` - Conversão de temperatura
- `contaBanco.test.js` - Simulação de conta bancária
- `frete.test.js` - Cálculo de frete
- `desconto.test.js` - Aplicação de descontos
- `validarSenha.test.js` - Validação de senha
- `login.test.js` e `loginMock.test.js` - Testes com mock e autenticação

## ✅ Cobertura de Testes

Rodando o comando abaixo:

```bash
npx jest --coverage
```

| Métrica     | Cobertura |
|-------------|-----------|
| Statements  | 100% ✅   |
| Branches    | 100% ✅   |
| Functions   | 100% ✅   |
| Lines       | 100% ✅   |

## 🚀 Como Executar o Projeto
### Clone o repositório:
```bash
git clone https://github.com/seu-usuario/testes-unitarios-jest.git
cd testes-unitarios-jest
```

Instale as dependências:
```bash
npm install
```

Execute os testes:
```bash
npm test
```

(Opcional) Execute com relatório de cobertura:

```bash
npm test -- --coverage
```

## 🛠️ Tecnologias Utilizadas
* Node.js
* Jest
* JavaScript (ES6+)
