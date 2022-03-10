const exibirValor = document.getElementById("exibirValor");
const valorCelcius = document.getElementById("valor");


function ConverterFahrenheit() {
    const valor = parseFloat(valorCelcius.value);
    const valorConvertido = (valor * 1.8) + 32;

    exibirValor.innerHTML = valor + "°C Em Fahrenheit é " + valorConvertido.toFixed(2)+ " °F";

    valorCelcius.value = "";
}

function ConverterKelvin() {
    const valor = parseFloat(valorCelcius.value);
    const valorConvertido = valor + 273.15;

    exibirValor.innerHTML = valor + "°C Em Kelvin é " + valorConvertido.toFixed(2)+ " K";

    valorCelcius.value = "";

}