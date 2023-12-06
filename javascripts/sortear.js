let menorNumero = 1;
let maiorNumero = 100;
let numeroSecreto = numeroAleatorio();

function numeroAleatorio() {
    return parseInt(Math.random() * ((maiorNumero + 1) - menorNumero) + menorNumero);
};

const menor = document.getElementById('menor-numero');
const maior = document.getElementById('maior-numero');

menor.innerHTML = menorNumero;
maior.innerHTML = maiorNumero;



