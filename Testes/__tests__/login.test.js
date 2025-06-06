// Validar se o e-mail e senha foram preenchidos.

const { login } = require('../login');

test('Deve retornar true se o email e senha forem enviados', () => {
    expect(login('emailteste@gmail.com', 'teste123')).toBe(true)
})

test('Deve retornar erro se o email nao for informado', () => {
    expect(() => login('', 'teste123')).toThrow('Email e senha devem ser preenchidos')
})

test('Deve retornar erro se a senha nao for informada', () => {
    expect(() => login('emailteste@gmail.com', '')).toThrow('Email e senha devem ser preenchidos')
})

test('Deve retornar erro se o email for invalido', () => {
    expect(() => login('emailteste', 'teste123')).toThrow('Email inválido')
})

test('Deve retornar erro se a senha for muito curta', () => {
    expect(() => login('emailteste@gmail.com', '123')).toThrow('Senha deve ter pelo menos 6 caracteres')
})