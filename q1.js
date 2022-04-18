//// VARIÁVEIS

const div1 = document.getElementById("q1");
let numerosMultiplos = 0;
let inputsPreenchidos;
let valoresCoerentes;

//// CHAMANDO FUNÇÕES

criarInputsELabels();

//// DECLARANDO FUNÇÕES

function criarInputsELabels() {
    div1.innerHTML = "<h1>Exercício 1 - Múltiplos de 2 e 3</h1><label for='valor-minimo'>Valor mínimo:</label><input type='number' name='valor-minimo' id='valor-minimo'><br><label for='valor-maximo'>Valor máximo:</label><input type='number' name='valor-maximo' id='valor-maximo'><br><button id='calcular'>Calcular</button><br>"
    const botaoCalcular = document.getElementById("calcular");
    botaoCalcular.addEventListener("click", mostrarResultado);
}

function verificarInputsPreenchidos(input1, input2) {
    
    if (input1 == "" || input2 == "") {
        alert("Informe os dois valores!");
        return false;
    }

    return true;
}

function verificarSeValorMaximoEhMaiorQueOMinimo(valorMaximo, valorMinimo) {
    
    if (valorMaximo <= valorMinimo) {
        alert("O valor máximo deve ser maior que o valor mínimo!");
        return false;
    }

    return true;
}

function calcularMultiplos() {
    const inputValorMinimo = document.getElementById("valor-minimo");
    const inputValorMaximo = document.getElementById("valor-maximo");

    inputsPreenchidos = verificarInputsPreenchidos(inputValorMinimo.value,inputValorMaximo.value);
    valoresCoerentes = verificarSeValorMaximoEhMaiorQueOMinimo(inputValorMaximo.value,inputValorMinimo.value);

    if (inputsPreenchidos == true && valoresCoerentes == true) {
        for (let i=inputValorMinimo.value; i <= inputValorMaximo.value; i++) {
            if ((i % 2 == 0) && (i % 3 == 0)) {
                numerosMultiplos = numerosMultiplos + 1;
            }
        }
    }

    console.log(numerosMultiplos);
}

function mostrarResultado() {
    calcularMultiplos();
    if (inputsPreenchidos == true && valoresCoerentes == true) {
        div1.insertAdjacentHTML("beforeend", `Há ${numerosMultiplos} números múltiplos de 2 e 3.`);
    }
}