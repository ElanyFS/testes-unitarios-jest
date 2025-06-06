function desconto(valor, percentual) {
  if (valor < 0) {
    throw new Error("Preço não pode ser negativo");
  }
  if (percentual > 100) {
    throw new Error("Desconto não pode ser maior que 100%");
  }
  if (percentual < 0) {
    throw new Error("Desconto não pode ser negativo");
  }
  let desconto = (valor * percentual) / 100;
  let resultado = valor - desconto;

  return resultado;
}

module.exports = { desconto };
