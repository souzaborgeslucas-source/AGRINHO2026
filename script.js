// Aguarda o carregamento completo do HTML antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos da tela
    const btnDicas = document.getElementById('btn-dicas');
    const listaDicas = document.getElementById('lista-dicas');

    // Adiciona o evento de clique ao botão
    btnDicas.addEventListener('click', () => {
        
        // Verifica se a lista possui a classe 'escondido'
        if (listaDicas.classList.contains('escondido')) {
            // Mostra a lista e muda o texto do botão
            listaDicas.classList.remove('escondido');
            btnDicas.textContent = 'Ocultar Práticas Sustentáveis';
        } else {
            // Esconde a lista e volta o texto original do botão
            listaDicas.classList.add('escondido');
            btnDicas.textContent = 'Ver Práticas Sustentáveis';
        }
        
    });
});