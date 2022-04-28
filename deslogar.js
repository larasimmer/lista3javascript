//// VARIÁVEIS

const botaoDeslogar = document.getElementById("deslogar");

//// CHAMANDO FUNÇÕES

botaoDeslogar.addEventListener("click", realizarLogout);

//// DECLARANDO FUNÇÕES

function realizarLogout() {
    window.location.replace("index.html");
    //usuario.logado = "off";
}