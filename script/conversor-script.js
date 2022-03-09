const valorInput = document.getElementById("valor");
const valorConvertido = document.getElementById("valorConvertido");
const valorEmBitCoin = document.getElementById("valorConvertidoBitcoin");

function ConverterEuro(){
    const valorConvertFloat = parseFloat(valorInput.value);
    if (valorInput.value === ""){
        valorConvertido.innerHTML = "O Valor Para conversão nao pode estar Vazio!";

    }else{
        const conversao = valorConvertFloat * 5.50;
        const conversaoBitCoin = conversao / 209156.96;
        valorConvertido.innerHTML = "O Valor Convertido = € " + conversao;
        valorEmBitCoin.innerHTML = "O Valor Em Bitcoin é " +  conversaoBitCoin.toFixed(7);

    }
    valorInput.value = "";
}

function ConverterRublo(){
    const valorConvertFloat = parseFloat(valorInput.value);
    if (valorInput.value === ""){
        valorConvertido.innerHTML = "O Valor Para conversão nao pode estar Vazio!";

    }else{
        const conversao = valorConvertFloat * 0.039;
        const conversaoBitCoin = conversao / 209156.96;
        valorConvertido.innerHTML = "O Valor Convertido = ₽ " + conversao;
        valorEmBitCoin.innerHTML = "O Valor Em Bitcoin é " +  conversaoBitCoin.toFixed(7);


    }
    valorInput.value = "";
}

function ConverterDolar(){
    const valorConvertFloat = parseFloat(valorInput.value);
    if (valorInput.value === ""){
        valorConvertido.innerHTML = "O Valor Para conversão nao pode estar Vazio!";

    }else{
        const conversao = valorConvertFloat * 5;
        const conversaoBitCoin = conversao / 209156.96;
        valorConvertido.innerHTML = "O Valor Convertido = USD " + conversao;
        valorEmBitCoin.innerHTML = "O Valor Em Bitcoin é " +  conversaoBitCoin.toFixed(7);

    }
    valorInput.value = "";
}
