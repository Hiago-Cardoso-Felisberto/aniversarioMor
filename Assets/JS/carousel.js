let moldura;
let fotos;
let indice;
let temporizador;

const TEMPO = 2500;

window.onload = inicio;

function inicio() {
    moldura = document.getElementById("moldura");
    fotos = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.jpeg", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg", "img11.jpeg", "img12.jpeg", "img13.jpeg"];
    indice = 0;

    mostrarFoto();
    automaticaFoto();
}

function avancarFoto() {
    indice = (indice + 1) % fotos.length;
    moldura.src = "./Imagens/Carrosel/" + fotos[indice];
}

function automaticaFoto() {
    temporizador = setInterval(avancarFoto, TEMPO);
}

function mostrarFoto() {
    moldura.src = "./Imagens/Carrosel/" + fotos[indice];
}
