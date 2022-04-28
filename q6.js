//// VARIÁVEIS

const div6 = document.getElementById("q6");

//// CHAMANDO FUNÇÕES

criarInputsEBotoes();

//// DECLARANDO FUNÇÕES

function criarInputsEBotoes() {
    div6.innerHTML = "<h1>Exercício 6 - Cadastro e login</h1><h3>Insira as suas credenciais:</h3><form id='form-login'><label for='email'>E-mail:</label><input type='email' name='email' id='email'><label for='senha'>Senha:</label><input type='password' name='senha' id='senha'><button id='entrar' type='submit'>Entrar</button></form><br><button id='criar-conta'>Criar conta</button>";
    const botaoCriarConta = document.getElementById("criar-conta");
    botaoCriarConta.addEventListener("click", mostrarInputsCadastro);
    const botaoEntrar = document.getElementById("entrar");
    botaoEntrar.addEventListener("click", realizarLogin);
}

function mostrarInputsCadastro() {
    div6.insertAdjacentHTML("beforeend", "<h3>Insira os seus dados:</h3><form id='form-cadastro'><label for='nome'>Nome:</label><input type='text' name='nome' id='nome'><label for='email-cadastro'>E-mail:</label><input type='email' name='email-cadastro' id='email-cadastro'><br><label for='senha-cadastro'>Senha:</label><input id='senha-cadastro' name='senha-cadastro' type='password'><label for='confirmar-senha'>Confirmar senha:</label><input id='confirmar-senha' name='confirmar-senha' type='password'><button id='cadastrar' type='submit'>Cadastrar</button></form>");
    const botaoCadastrar = document.getElementById("cadastrar");
    botaoCadastrar.addEventListener("click", submeterDadosDeCadastro);
}

function verificarInputsCadastroPreenchidos(nome,email,senha,confirmarSenha) {
    if (nome == "" || email == "" || senha == "" || confirmarSenha == "") {
        alert("Preencha todos os campos para se cadastrar!");
        return false;
    }

    return true;
}

function verificarSenhasIguais(senha, confirmarSenha) {
    if (senha != confirmarSenha) {
        alert("As senhas inseridas sevem ser iguais!");
        return false;
    }

    return true;
}

function submeterDadosDeCadastro(e) {
    let nomeCadastrado = document.getElementById("nome").value;
    let emailCadastrado = document.getElementById("email-cadastro").value;
    let senhaCadastrada = document.getElementById("senha-cadastro").value;
    let confirmarSenha = document.getElementById("confirmar-senha").value;
    let formularioCadastro = document.getElementById("form-cadastro");

    let cadastroPreenchido = verificarInputsCadastroPreenchidos(nomeCadastrado,emailCadastrado,senhaCadastrada,confirmarSenha);
    let senhasIguais = verificarSenhasIguais(senhaCadastrada,confirmarSenha);

    if (cadastroPreenchido == false || senhasIguais == false) {
        e.preventDefault();
    } else {
        formularioCadastro.submit();
        let usuario = {
            nome: nomeCadastrado,
            email: emailCadastrado,
            senha: senhaCadastrada,
            confirmarSenha: confirmarSenha,
            //logado: off
        };

        let json = JSON.stringify(usuario);
        localStorage.setItem(email, json);
        alert("Cadastro realizado com sucesso!");
    }
}

function verificarInputsLoginPreenchidos(email,senha) {
    if (email == "" || senha == "") {
        alert("Preencha e-mail e senha para realizar login!");
        return false;
    }

    return true;
}

function realizarLogin(e) {
    e.preventDefault();
    let emailInserido = document.getElementById("email").value;
    let senhaInserida = document.getElementById("senha").value;
    let formularioLogin = document.getElementById("form-login");

    let loginPreenchido = verificarInputsLoginPreenchidos(emailInserido,senhaInserida);

    if (loginPreenchido == true) {
        let usuario = localStorage.getItem(email);
        let data = JSON.parse(usuario);
        formularioLogin.submit();

        if (emailInserido == data.email && senhaInserida == data.senha) {
            //usuario.logado = "on";
            window.location.replace("usuario_logado.html");
        } else {
            alert("Credenciais inválidas!");
            window.location.reload();
        }
    }
}