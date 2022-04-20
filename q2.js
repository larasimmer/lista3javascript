//// VARIÁVEIS

const div2 = document.getElementById("q2");
let valorInput;
let inputPreenchido;
let inputPositivo;
let resultado;
let tempoInicio;
let tempoFinal;

//// CHAMANDO FUNÇÕES

criarInputsELabels();

//// DECLARANDO FUNÇÕES

function criarInputsELabels() {
    div2.innerHTML = "<h1>Exercício 2 - Cálculo de fatorial</h1><label for='numero'>Insira um número:</label><input type='number' name='numero' id='numero'><br><button id='calcularFatorial'>Calcular</button><br>"
    const botaoCalcular = document.getElementById("calcularFatorial");
    botaoCalcular.addEventListener("click", mostrarResultado);
}

function verificarInputPreenchido(input) {
    if (input == "") {
        alert("Insira um número!");
        return false;
    }

    return true;
}

function verificarInputPositivo(input) {
    if (input < 0) {
        alert("O número inserido deve ser positivo!");
        return false;
    }

    return true;
}

function calcularFatorial(n) {
    valorInput = document.getElementById("numero").value;

    inputPreenchido = verificarInputPreenchido(valorInput);
    inputPositivo = verificarInputPositivo(valorInput);

    if (inputPreenchido == true && inputPositivo == true) {
        if (n == 1) {
            resultado = 1;
        } else {
            resultado = n*calcularFatorial(n - 1);
        }
    }

    console.log(resultado);
    return resultado;
}

function mostrarResultado() {
    valorInput = document.getElementById("numero").value;

    let tempoInicio = performance.now();
    calcularFatorial(valorInput);
    let tempoFinal = performance.now();

    if (inputPreenchido == true && inputPositivo == true) {
        div2.insertAdjacentHTML("beforeend", `${valorInput}! = ${resultado} (${tempoFinal - tempoInicio} milisegundos)`);
    }
}