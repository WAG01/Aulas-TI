function validarFormulario() {
    const nome = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagemErro = document.getElementById("mensagemErro");

    mensagemErro.innerHTML = "";

    if (usuario === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo Usuario.";
        return false;
    }

    if (senha === "") {
        mensagemErro.innerHTML = "Por favor, preencha o campo Senha.";
        return false;
    }

    return true;
}