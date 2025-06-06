class ContaBanco{
    constructor(){
        this.saldo = 0
    }

    depositar(valor){
        if(valor < 0){
            throw new Error("Valor inválido para depósito");
        }

        this.saldo += valor
    }

    sacar(valor){
        if(valor < 0){
            throw new Error("Valor inválido para saque");
        }

        if(valor > this.saldo){
            throw new Error("Saldo insuficiente para saque");
        }

        this.saldo -= valor
    }

    consultarSaldo(){
        return this.saldo;
    }
}

module.exports = ContaBanco;