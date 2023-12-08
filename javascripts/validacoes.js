function validarChute (chute){
    const numeroFalado = parseInt(chute);

    if(isNaN(numeroFalado)){
        dica.innerHTML = `
        <P>Número Invalido, Tente Novamente</P>
        `;
    }

    if(idNumeroForaDoParametro(numeroFalado)){
        dica.innerHTML = `
        <P><strong>Invalido:</strong> Numero falado não está entre : ${menorNumero} e ${maiorNumero}</P>
        `;
    } else if (numeroFalado > numeroSecreto){
        dica.innerHTML = `
        <p>O número secreto é menor  <i class="fa-solid fa-arrow-down-long"></i> </p>
        `
    } else if (numeroFalado < numeroSecreto) {
        dica.innerHTML = `
        <p>O número secreto é Maior <i class="fa-solid fa-arrow-up-long"></i></p>
        `
    }

    if(!idNumeroForaDoParametro(numeroFalado) && !isNaN(numeroFalado)){
        exibirNaTela(numeroFalado);
    }

    if(acertouNumero(numeroFalado, numeroSecreto)){
        document.body.innerHTML = `
        <h2>Você Acertou !!</h2>
        <h3>O número secreto era : ${numeroSecreto}</h3>
        <input type="button" value="Reiniciar">
        `;
        const btnReiniciar = document.querySelector('input[value="Reiniciar"]');
        btnReiniciar.addEventListener("click", () => window.location.reload());
    }

}

//validacoes
function idNumeroForaDoParametro(numeroFalado){
    return numeroFalado > maiorNumero || numeroFalado < menorNumero;
}

function acertouNumero(numeroFalado,numeroSecreto){
    return numeroFalado === numeroSecreto;
}

//exibir tela
function exibirNaTela(numeroFalado) {
    containerNumeroDescrito.innerText = `${numeroFalado}`;
};