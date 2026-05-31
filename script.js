// ABRIR E FECHAR INFORMAÇÕES AO CLICAR NO MARCADOR
const marcadores = document.querySelectorAll('.marcador');

marcadores.forEach(marcador => {
    marcador.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Fecha todas as outras janelas de informação
        marcadores.forEach(outro => {
            if(outro !== marcador) outro.querySelector('.caixa-informacoes').style.display = 'none';
        });

        // Abre ou fecha a janela atual
        const info = marcador.querySelector('.caixa-informacoes');
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });
});

// FECHAR AO CLICAR EM QUALQUER LUGAR DA TELA
document.addEventListener('click', () => {
    marcadores.forEach(marcador => marcador.querySelector('.caixa-informacoes').style.display = 'none');
});

// SISTEMA DE FILTRAR POR TIPO DE PRODUÇÃO
const filtro = document.getElementById('filtroProducao');

filtro.addEventListener('change', () => {
    const tipoEscolhido = filtro.value;

    marcadores.forEach(marcador => {
        const tipos = marcador.dataset.tipo.split(' ');
        if(tipoEscolhido === 'todos' || tipos.includes(tipoEscolhido)) {
            marcador.style.display = 'block';
        } else {
            marcador.style.display = 'none';
        }
    });
});
