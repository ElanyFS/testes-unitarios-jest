const { calculaFrete } = require('../calculaFrete');

// Calcular o frete com base no peso:

// Até 1kg → R$ 10

// De 1kg até 5kg → R$ 20

// Acima de 5kg → R$ 50

test('Deve retornar 10 caso o peso seja até 1kg', () => {
    expect(calculaFrete(0.5)).toBe(10);
})

test('Deve retornar 20 caso o peso seja entre 1kg e 5kg', () => {
    expect(calculaFrete(3)).toBe(20)
})

test('Deve retorar 50 caso o peso seja acima de 5kg', () => {
    expect(calculaFrete(6)).toBe(50);
})

test('Deve retornar erro se o peso for 0', () => {
    expect(() => calculaFrete(0)).toThrow('Peso deve ser maior que 0')
})

test('Deve retornar erro se o peso for negativo', () => {
    expect(() => calculaFrete(-1)).toThrow('Peso deve ser maior que 0')
})