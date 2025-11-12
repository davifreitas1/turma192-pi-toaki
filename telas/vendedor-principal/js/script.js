document.addEventListener('DOMContentLoaded', () => {
    const cardDistAtiva = Array.from(document.getElementsByClassName('card-distancia-ativa'))[0];
    const cardDistFechar = Array.from(document.getElementsByClassName('card-distancia-opcao-fechar'))[0];

    function trocarNaoRenderizarCardDist() {
        const cardDistOpcao =  Array.from(document.getElementsByClassName('card-distancia-opcao'));
        cardDistOpcao.forEach((card) => {
            card.classList.toggle('nao-renderizar')
        });
    }

    cardDistAtiva.addEventListener('click', trocarNaoRenderizarCardDist);
    cardDistFechar.addEventListener('click', trocarNaoRenderizarCardDist);

});