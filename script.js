// Selecionando o formulário
const form = document.getElementById("form-contato");
const statusMensagem = document.getElementById("mensagem-status");

form.addEventListener("submit", function(event) {

    event.preventDefault(); // Impede envio padrão

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se os campos estão vazios
    if (nome === "" || email === "" || mensagem === "") {
        statusMensagem.innerText = "Preencha todos os campos.";
        statusMensagem.style.color = "red";
        return;
    }

    // Validação simples de e-mail
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {
        statusMensagem.innerText = "Digite um e-mail válido.";
        statusMensagem.style.color = "red";
        return;
    }

    // Se passou na validação
    statusMensagem.innerText = "Mensagem enviada com sucesso!";
    statusMensagem.style.color = "green";

    // Limpa formulário
    form.reset();
});