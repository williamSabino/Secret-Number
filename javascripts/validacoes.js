function validarChute (chute){
    const numeroFalado = parseInt(chute);

    if(isNaN(numeroFalado)){
        console.log("Invalid NAN");
    }

    if(idNumeroForaDoParametro(numeroFalado)){
        console.log('Numero fora do parametro')
    }

    if(!idNumeroForaDoParametro(numeroFalado) && !isNaN(numeroFalado)){
        exibirNaTela(numeroFalado);
    }

}

//validacoes
function idNumeroForaDoParametro(numeroFalado){
    return numeroFalado > maiorNumero || numeroFalado < menorNumero;
}

//exibir tela
function exibirNaTela(numeroFalado) {
    containerNumeroDescrito.innerText = `${numeroFalado}`;
};