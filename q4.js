//// VARIÁVEIS

const div4 = document.getElementById("q4");
let lista = [];
let camposPreenchidos;
let quantidadeDeNumerosValida;
let valorMininoEMaximoCoerentes;

//// CHAMANDO FUNÇÕES

criarInputsEBotao();

//// DECLARANDO FUNÇÕES

function criarInputsEBotao() {
    div4.innerHTML = "<h1>Exercício 4 - Lista de números aleatórios</h1><label for='quantidade-numeros'>Quantidade de números:</label><input type='number' name='quantidade-numeros' id='quantidade-numeros'><br><label for='valorMinimo'>Valor mínimo:</label><input type='number' name='valorMinimo' id='valorMinimo'><br><label for='valorMaximo'>Valor máximo:</label><input type='number' name='valorMaximo' id='valorMaximo'></input><br><button id='criar-lista'>Criar lista</button>"
    const botaoCriarLista = document.getElementById("criar-lista");
    botaoCriarLista.addEventListener("click", mostrarResultado);
}

function verificarInputsPreenchidos(input1, input2, input3) {
    if (input1 == "" || input2 == "" || input3 == "") {
        alert("Preencha todos os campos!");
        return false;
    }

    return true;
}

function verificarQuantidadeDeNumerosMaiorQueZero(input1) {
    if (input1 <= 0) {
        alert("A quantidade de números deve ser maior que zero!");
        return false;
    }

    return true;
}

function verificarSeValorMinimoEhMenorQueOValorMaximo(input2,input3) {
    if (input2 >= input3) {
        alert("O valor máximo deve ser maior que o valor mínimo!");
        return false;
    }

    return true;
}

function criarLista() {
    let quantidadeDeNumeros = document.getElementById("quantidade-numeros").value;
    let valorMinimo = document.getElementById("valorMinimo").value;
    let valorMaximo = document.getElementById("valorMaximo").value;

    camposPreenchidos = verificarInputsPreenchidos(quantidadeDeNumeros, valorMinimo, valorMaximo);
    quantidadeDeNumerosValida = verificarQuantidadeDeNumerosMaiorQueZero(quantidadeDeNumeros);
    valorMininoEMaximoCoerentes = verificarSeValorMinimoEhMenorQueOValorMaximo(valorMinimo,valorMaximo);

    if (camposPreenchidos == true && quantidadeDeNumerosValida == true && valorMininoEMaximoCoerentes == true) {
        lista.push(valorMinimo);
        while (lista.length <= quantidadeDeNumeros - 2) {
            let numeroAleatorio = Math.floor((Math.random()*(valorMaximo - valorMinimo)) + valorMinimo);
            if (!lista.includes(numeroAleatorio)) {
                if (numeroAleatorio > valorMinimo && numeroAleatorio < valorMaximo) {
                    lista.splice(1, 0, numeroAleatorio);
                }
            }
        }
        lista.push(valorMaximo);
        lista.sort(function(a, b){return a-b});
    }
}

function mostrarResultado() {
    criarLista();
    if (camposPreenchidos == true && quantidadeDeNumerosValida == true && valorMininoEMaximoCoerentes == true) {
        div4.insertAdjacentHTML("beforeend", lista);
    }
}