////VARIÁVEIS

const inputNumero = document.getElementById("numero");
const botaoCalcular = document.getElementById("calcular");
const spamTabuada = document.getElementById("tabuada");
let pTabuada = document.getElementById("resultado");
let resultado = [];

////CHAMANDO FUNÇÕES

botaoCalcular.addEventListener("click", mostrarResultado);

////DECLARANDO FUNÇÕES

function verificarInputVazio() {
    if (inputNumero.value == "") {
        alert("Insira um número!");
        return false;
    }

    return true;
}

function calcularTabuada() {
    inputValido = verificarInputVazio();

    if (inputValido == true) {
        for (let i=1; i <= 10; i++) {
            resultado.push(inputNumero.value*i);
        }
    }
}

function mostrarResultado() {
    calcularTabuada();
    pTabuada.style.display = "block";
    spamTabuada.textContent = "1 x" + " " + inputNumero.value + "=" + resultado[0] + " " + 
    "2 x" + " " + inputNumero.value + "=" + resultado[1] + " " +
    "3 x" + " " + inputNumero.value + "=" + resultado[2] + " " +
    "4 x" + " " + inputNumero.value + "=" + resultado[3] + " " +
    "5 x" + " " + inputNumero.value + "=" + resultado[4] + " " +
    "6 x" + " " + inputNumero.value + "=" + resultado[5] + " " +
    "7 x" + " " + inputNumero.value + "=" + resultado[6] + " " +
    "8 x" + " " + inputNumero.value + "=" + resultado[7] + " " +
    "9 x" + " " + inputNumero.value + "=" + resultado[8] + " " +
    "10 x" + " " + inputNumero.value + "=" + resultado[9];
}

