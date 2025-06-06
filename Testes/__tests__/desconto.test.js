const { desconto } = require("../desconto");

// Aplicar um desconto percentual sobre um preço.

test('Deve aplicar 10% de desconto em R$ 100', () => {
  expect(desconto(100, 10)).toBe(90);
});

test("Deve retornar o mesmo preço se o desconto for 0%", () => {
  expect(desconto(100, 0)).toBe(100);
});

test("Deve retornar 0 se o desconto for 100%", () => {
  expect(desconto(100, 100)).toBe(0);
});

test("Deve lançar erro se o desconto for maior que 100%", () => {
  expect(() => desconto(100, 110)).toThrow("Desconto não pode ser maior que 100%");
});

test('Deve lançar erro se o preço for negativo', () => {
    expect(() => desconto(-100,10)).toThrow("Preço não pode ser negativo");
})

test('Deve lançar erro se o percentual for negativo', () => {
    expect(() => desconto(100,-10)).toThrow("Desconto não pode ser negativo");
})