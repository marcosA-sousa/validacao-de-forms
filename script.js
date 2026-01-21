// Seleciona o formulário
const form = document.getElementById('cadastroForm');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

// Intercepta o evento de submit
form.addEventListener('submit', function(event) {
    // Previne o comportamento padrão do formulário
    event.preventDefault();

    // Adiciona classe para mostrar mensagens de erro
    form.classList.add('formEnviado');

    // Verifica se o nome está vazio
    const nomeValido = nomeInput.value.trim() !== '';

    // Verifica se o email está vazio e é válido
    const emailValido = emailInput.value.trim() !== '' && emailInput.checkValidity();

    // Se ambos os campos forem válidos, mostra mensagem de sucesso
    if (nomeValido && emailValido) {
        // Remove a classe de formulário submetido
        form.classList.remove('formEnviado');

        // Mostra mensagem de sucesso
        mensagem.classList.add('mostrarMensagem');

        // Limpa o formulário
        form.reset();

        // Oculta a mensagem de sucesso após 3 segundos
        setTimeout(() => {
            mensagem.classList.remove('mostrarMensagem');
        }, 3000);
    }
});

// Adiciona validação em tempo real
nomeInput.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.setCustomValidity('Campo obrigatório');
    } else {
        this.setCustomValidity('');
    }
});

emailInput.addEventListener('blur', function() {
    if (this.value.trim() === '') {
        this.setCustomValidity('Campo obrigatório');
    } else {
        this.setCustomValidity('');
    }
});

// Remove a validação personalizada ao digitar
nomeInput.addEventListener('input', function() {
    this.setCustomValidity('');
});

emailInput.addEventListener('input', function() {
    this.setCustomValidity('');
});