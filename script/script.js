const nota1 = document.getElementById("fnota1");
const nota2 = document.getElementById("fnota2");
const nota3 = document.getElementById("fnota3");
const nota4 = document.getElementById("fnota4");
const resultado = document.getElementById("resultado-media");

function calculoDaMedia() {

    if (nota1.value == "" || nota2.value == "" || nota3 == "" || nota4.value == "") {

        resultado.innerHTML = "Preciso De todas As 4 Notas";

    } else {
        const media = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value) + parseFloat(nota4.value)) / 4;

        resultado.innerHTML = "A Media Entre As Notas é  " + "' " + media + " '";

    }

    nota1.value = "";
    nota2.value = "";
    nota3.value = "";
    nota4.value = "";
}