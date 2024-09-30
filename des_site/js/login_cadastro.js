const btnMostrarLogin = document.getElementById('mostrar-login');
const btnMostrarCadastro = document.getElementById('mostrar-cadastro');
const container = document.getElementById('container');

// Adiciona um evento de clique para mostrar o login
btnMostrarLogin.addEventListener('click', () => {
    container.classList.remove('active');
});

// Adiciona um evento de clique para mostrar o cadastro
btnMostrarCadastro.addEventListener('click', () => {
    container.classList.add('active');
});