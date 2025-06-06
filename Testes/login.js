function login(email, senha) {
    if(!email || !senha){
        throw new Error('Email e senha devem ser preenchidos');
    }

    if(!email.includes('@') || !email.includes('.')){
        throw new Error('Email inválido');
    }

    if(senha.length < 6){
        throw new Error('Senha deve ter pelo menos 6 caracteres');
    }
    
    return true;
}

module.exports = { login };