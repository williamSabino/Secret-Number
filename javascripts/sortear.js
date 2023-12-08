let menorNumero = 1;
let maiorNumero = 1000;
let numeroSecreto = numeroAleatorio();

console.log(numeroSecreto);

function numeroAleatorio() {
    return parseInt(Math.random() * ((maiorNumero + 1) - menorNumero) + menorNumero);
};

const menor = document.getElementById('menor-numero');
const maior = document.getElementById('maior-numero');
const dica = document.getElementById('dica');


menor.innerHTML = menorNumero;
maior.innerHTML = maiorNumero;





