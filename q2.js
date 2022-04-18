//// VARIÁVEIS

const div2 = document.getElementById("q2");
let inputPreenchido;
let inputPositivo;

//// CHAMANDO FUNÇÕES

criarInputsELabels();

//// DECLARANDO FUNÇÕES

function criarInputsELabels() {
    div2.innerHTML = "<h1>Exercício 2 - Cálculo de fatorial</h1><label for='numero'>Insira um número:</label><input type='number' name='numero' id='numero'><br><button id='calcular'>Calcular</button><br>"
    const botaoCalcular = document.getElementById("calcular");
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

function calcularFatorial() {
    let valorInput = document.getElementById("numero").value;

    inputPreenchido = verificarInputPreenchido(valorInput);
    inputPositivo = verificarInputPositivo(valorInput);

    if (inputPreenchido == true && inputPositivo == true) {
        
    }
}