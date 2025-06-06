const {soma} = require('../soma');

test('Deve somar dois números corretamente', () => { 
    expect(soma(2,3)).toBe(5);
 })