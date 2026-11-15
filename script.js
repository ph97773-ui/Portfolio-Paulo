const botaoMensagem = document.querySelector('#mensagemBtn');
const mensagem = document.querySelector('#mensagem');

botaoMensagem.addEventListener('click', () => {
  const estaVisivel = !mensagem.hidden;
  mensagem.hidden = estaVisivel;
  botaoMensagem.textContent = estaVisivel ? 'Mostrar mensagem' : 'Esconder mensagem';
});
