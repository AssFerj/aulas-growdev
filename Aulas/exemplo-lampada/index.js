let quebrada = false;

function acendeLampada () {
    if (!quebrada) {
        const imagem = document.getElementById('lampada');
        imagem.src = './images/lampada_acessa.jpg';
    }
}

function apagaLampada () {
    if (!quebrada) {
        const imagem = document.getElementById('lampada');
        imagem.src = './images/lampada_apagada.jpg';
    }
}

function quebraLampada () {
    if (!quebrada) {

        const imagem = document.getElementById('lampada');
        imagem.src = './images/lampada_quebrada.jpg';
        quebrada = true;
        // document.getElementById('lampada').src = './images/lampada_quebrada.jpg';
        
        // Modo 1 = Usando innerHTML
        // const button = '<button onclick="restaurarLampada()">Restaurar Lâmpada!</button>';
        // const divPrincipal = document.getElementById('principal');
        // divPrincipal.innerHTML = divPrincipal.innerHTML + button;

        // Modo 2 = usando o createElement
        const button = document.createElement('button');
        button.innerText = "Restaurar Lâmpada!";
        button.onclick = restaurarLampada;
        button.id = 'restaurar';

        // Exemplo query selector
        // const divPrincipal = document.querySelector('#principal');
        // const divPrincipal = document.querySelector('.container');
        
        const divPrincipal = document.getElementById('principal');
        divPrincipal.appendChild(button);
    }
}

function restaurarLampada () {
    // const imagem = document.getElementById('lampada');
    // imagem.src = './images/lampada_apagada.jpg';
    quebrada = false;
    apagaLampada();

    const divPrincipal = document.getElementById('principal');
    const button = document.getElementById('restaurar');

    divPrincipal.removeChild(button);
}