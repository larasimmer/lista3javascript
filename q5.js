//// VARIÁVEIS

const div5 = document.getElementById("q5");
let ladosPreenchidos;
let ladosPositivos;
let tipoDoTriangulo;

//// CHAMANDO FUNÇÕES

criarInputsEBotao();

//// DECLARANDO FUNÇÕES

function criarInputsEBotao() {
    div5.innerHTML = "<h1>Exercício 5 - Triângulos</h1><label for='ladoA'>Lado A:</label><input id='ladoA' type='number' name='ladoA'><br><label for='ladoB'>Lado B:</label><input id='ladoB' type='number' name='ladoB'><br><label for='ladoC'>Lado C:</label><input id='ladoC' type='number' name='ladoC'><br><button id='calcular-triangulo'>Calcular</button>";
    const botaoCalcularTriangulo = document.getElementById("calcular-triangulo");
    botaoCalcularTriangulo.addEventListener("click", mostrarResultado);
}

function validarInputsPreenchidos(ladoA, ladoB, ladoC) {
    if (ladoA == "" || ladoB == "" || ladoC == "") {
        alert("Preencha todos os campos!");
        return false;
    }
    return true;
}

function validarInputsPositivos(ladoA, ladoB, ladoC) {
    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Os valores devem ser positivos!");
        return false;
    }

    return true;
}

function definirTipoDoTriangulo() {
    let ladoA = document.getElementById("ladoA").value;
    let ladoB = document.getElementById("ladoB").value;
    let ladoC = document.getElementById("ladoC").value;

    ladosPreenchidos = validarInputsPreenchidos(ladoA, ladoB, ladoC);
    ladosPositivos = validarInputsPositivos(ladoA, ladoB, ladoC);

    if (ladosPreenchidos == true && ladosPositivos == true) {
        if (ladoA == ladoB && ladoB == ladoC) {
            tipoDoTriangulo = "O triângulo é equilátero!";
        } else if (ladoA == ladoB && ladoB != ladoC) {
            tipoDoTriangulo = "O triângulo é isósceles!";
        } else if (ladoA == ladoC && ladoC != ladoB) {
            tipoDoTriangulo = "O triângulo é isósceles!";
        } else if (ladoB == ladoC && ladoC != ladoA) {
            tipoDoTriangulo = "O triângulo é isósceles!";
        } else {
            tipoDoTriangulo = "O triângulo é escaleno!";
        }
    }
}

function mostrarResultado() {
    definirTipoDoTriangulo();

    div5.insertAdjacentHTML("beforeend", tipoDoTriangulo);
}