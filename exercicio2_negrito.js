$(document).ready(function() {

    let itensDaLista = $("#lista").children();
    let nomesItensDaLista = [];
    for (let i = 0; i < itensDaLista.length; i++) {
        nomesItensDaLista.push(itensDaLista[i].text);
    }
    console.log(nomesItensDaLista);
});
