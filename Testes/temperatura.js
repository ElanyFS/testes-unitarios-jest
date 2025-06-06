function celsiusParaFahrenheit(temperatura) {
  if (typeof temperatura !== "number" || !Number.isFinite(temperatura)) {
    throw new Error("Valor inválido");
  }

  return temperatura * 1.8 + 32;
}

module.exports = { celsiusParaFahrenheit };