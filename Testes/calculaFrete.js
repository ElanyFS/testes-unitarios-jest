function calculaFrete(peso) {
  if (peso == 0 || peso < 0) {
    throw new Error("Peso deve ser maior que 0");
  } else {
    if (peso <= 1) {
      return 10;
    } else if (peso > 1 && peso <= 5) {
      return 20;
    } else {
      return 50;
    }
  }
}

module.exports = { calculaFrete };
