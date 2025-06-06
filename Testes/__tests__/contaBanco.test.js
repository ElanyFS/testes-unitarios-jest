// Gerenciar saldo bancário com as operações:
// Depositar
// Sacar
// Consultar saldo

const ContaBanco = require("../ContaBanco");

let conta;

beforeEach(() => {
  conta = new ContaBanco();
});

// Depositar
test("Não deve depositar valor negativo", () => {
  expect(() => conta.depositar(-100)).toThrow("Valor inválido para depósito");
});

test("Deve retornar corretamente o saldo após o deposito", () => {
  conta.depositar(100);

  expect(conta.consultarSaldo()).toBe(100);
});

// Sacar
test("Não deve sacar valor negativo", () => {
  expect(() => conta.sacar(-100)).toThrow("Valor inválido para saque");
});

test("Não deve sacar valor maior que o saldo disponivel", () => {
  conta.depositar(200);

  expect(() => conta.sacar(300)).toThrow("Saldo insuficiente para saque");
});

test("Deve retornar corretamente o saldo após o saque", () => {
  conta.depositar(200);
  conta.sacar(50);

  expect(conta.consultarSaldo()).toBe(150);
});

test("Saldo inicial deve ser 0", () => {
  expect(conta.consultarSaldo()).toBe(0);
});
