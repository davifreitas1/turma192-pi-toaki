document.addEventListener('DOMContentLoaded', () => {

  const switches = document.getElementsByClassName('switch-externo');

  Array.from(switches).forEach((swt) => {
    swt.addEventListener('click', (event) => {
      event.stopPropagation();
      
      if (swt.classList.contains('switch-externo-ativo')) {
        swt.classList.remove('switch-externo-ativo');
        swt.classList.add('switch-externo-inativo');
        console.log('Switch DESLIGADO');
      } else {
        swt.classList.remove('switch-externo-inativo');
        swt.classList.add('switch-externo-ativo');
        console.log('Switch LIGADO');
      }
    });
  });


  const btnAdicionar = document.querySelector('.botao-ciano-medio');
  const btnVoltar = document.getElementById('btn-voltar');
  const popup = document.getElementById('tela-adicionar');

  // Abrir popup
  btnAdicionar.addEventListener('click', function() {
    popup.classList.remove('oculto');
  });

  // Fechar popup - versão garantida
  btnVoltar.addEventListener('click', function() {
    popup.classList.add('oculto');
  });

  // Fechar ao clicar no fundo
  popup.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('oculto');
    }
  });
});