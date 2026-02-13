// Seleciona o formulário 
const formulario = document.getElementById('formContato');

formulario.addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário para validar primeiro
    event.preventDefault();

    // Capturando os valores dos campos 
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se campos estão vazios 
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    // Validação de formato de e-mail usando Expressão Regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).');
        return;
    }

    // Simulação de envio com sucesso 
    alert('Mensagem enviada com sucesso! (Simulação)');
    
    // Limpar os campos após o envio 
    formulario.reset();
});