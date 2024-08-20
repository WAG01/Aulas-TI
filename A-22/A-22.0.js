function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    mensagemErro.innerHTML = "";

    if (nome === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo Nome.";
        return false;
    }

    if (email === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo E-mail.";
        return false;
    }

    if (senha === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo Senha.";
        return false;
    }

    return true;
}