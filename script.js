// Selecionar o botão
const themeButton = document.getElementById('theme-button');

// Função para alternar o tema
function toggleTheme() {
  const body = document.body;
  if (body.style.backgroundColor === 'black') {
    body.style.backgroundColor = '#f0f0f0';
    body.style.color = '#333';
    themeButton.textContent = 'Mudar Tema';
  } else {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    themeButton.textContent = 'Voltar ao Tema Claro';
  }
}

// Adicionar evento de clique ao botão
themeButton.addEventListener('click', toggleTheme);
