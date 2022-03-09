const numeroSecreto = Math.round(Math.random() * 10);
const chute = document.getElementById("valor");
const mostraTentativas = document.getElementById("page-subtitle-tentativas");
let tentativas = 5;

function Chutar() {

    const valorChutado = parseInt(chute.value);

    const resultado = document.getElementById("resultado");
    if (tentativas == 1) {
        tentativas = 0;
        resultado.innerHTML = "Que Pena Você Perdeu o Numero Secreto Era " + numeroSecreto;
        mostraTentativas.innerHTML = "Tentativas Restantes " + tentativas;
        input.disabled = true;

    } else {

        if (valorChutado < 0 || valorChutado > 10) {
            resultado.innerHTML = "Digite Apenas Numeros Entre 0 e 10!!";
            chute.value = "";
            tentativas--;
            mostraTentativas.innerHTML = "Tentativas Restantes " + tentativas;

        } else {

            if (valorChutado == numeroSecreto) {
                resultado.innerHTML = "Parabéns Você Acertou!!";
                chute.value = "";

            } else if (valorChutado < numeroSecreto) {
                resultado.innerHTML = "O Numero Secreto é Maior que " + valorChutado;
                chute.value = "";
                tentativas--;
                mostraTentativas.innerHTML = "Tentativas Restantes " + tentativas;

            } else if (valorChutado > numeroSecreto) {
                resultado.innerHTML = "O Numero Secreto é Menor que " + valorChutado;
                chute.value = "";
                tentativas--;
                mostraTentativas.innerHTML = "Tentativas Restantes " + tentativas;
            }
        }
    }
}
