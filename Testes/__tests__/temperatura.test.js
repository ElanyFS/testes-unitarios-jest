// Converter temperatura de Celsius para Fahrenheit. Fórmula: F = C * 1.8 + 32

const { celsiusParaFahrenheit } = require("../temperatura");

test("Deve retornar 32 para C = 0", () => {
  expect(celsiusParaFahrenheit(0)).toBe(32);
});

test("Deve retornar 212 para C = 100", () => {
  expect(celsiusParaFahrenheit(100)).toBe(212);
});

test("Deve retornar -40 para C = -40", () => {
  expect(celsiusParaFahrenheit(-40)).toBe(-40);
});

test("Deve retornar 98.6 para C = 37", () => {
  expect(celsiusParaFahrenheit(37)).toBeCloseTo(98.6, 1);
});

test("Deve retornar 68 para C = 20", () => {
  expect(celsiusParaFahrenheit(20)).toBeCloseTo(68, 1);
});

test("Deve retornar 14 para C = -10", () => {
  expect(celsiusParaFahrenheit(-10)).toBeCloseTo(14, 1);
});

test("Deve retonar erro caso sejam informados valores invalidos", () => {
  expect(() => celsiusParaFahrenheit("a")).toThrow("Valor inválido");
});

test("Deve retonar erro caso sejam informados valores invalidos", () => {
  expect(() => celsiusParaFahrenheit(null)).toThrow('Valor inválido');
});
test("Deve retonar erro caso sejam informados valores invalidos", () => {
  expect(() => celsiusParaFahrenheit(undefined)).toThrow('Valor inválido');
});
test("Deve retonar erro caso sejam informados valores invalidos", () => {
  expect(() => celsiusParaFahrenheit(NaN)).toThrow('Valor inválido');
});
test("Deve retonar erro caso sejam informados valores invalidos", () => {
  expect(() => celsiusParaFahrenheit(Infinity)).toThrow('Valor inválido');
});
test("Deve retonar erro caso sejam informados valores invalidos", () => {
  expect(() => celsiusParaFahrenheit(-Infinity)).toThrow("Valor inválido");
});
