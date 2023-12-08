const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const containerNumeroDescrito = document.querySelector('.numero-descrito');
const recognition = new SpeechRecognition();
recognition.lang = "pt-br";
recognition.start();

recognition.addEventListener("result", (event) => {
    let numeroFalado = event.results[0][0].transcript;
    validarChute(numeroFalado);
});

recognition.addEventListener("end", () => recognition.start());

