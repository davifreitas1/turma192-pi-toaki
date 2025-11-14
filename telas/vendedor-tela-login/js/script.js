// Captura os formulários
    const telaLogin = document.getElementById('telaLogin');
    const telaRegistro = document.getElementById('telaRegistro');
    const telaEsqueci = document.getElementById('telaEsqueci');

    // Função para alternar entre as telas
    function mostrarTela(tela) {
      telaLogin.classList.remove('ativo');
      telaRegistro.classList.remove('ativo');
      telaEsqueci.classList.remove('ativo');
      tela.classList.add('ativo');
    }

    // Botões e links
    document.getElementById('irRegistro').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarTela(telaRegistro);
    });

    document.getElementById('irEsqueci').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarTela(telaEsqueci);
    });

    document.getElementById('voltarLogin1').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarTela(telaLogin);
    });

    document.getElementById('voltarLogin2').addEventListener('click', (e) => {
      e.preventDefault();
      mostrarTela(telaLogin);
    });