let quebrada = false;
function acendeLampada(){
    if(!quebrada){
        document.getElementById('lampada').src = './imagens/lampada_acessa.jpg'
    }
}
function apagaLampada(){
    if(!quebrada){
        document.getElementById('lampada').src = './imagens/lampada_apagada.jpg'
    }
}
function quebraLampada(){
    if(!quebrada){
        document.getElementById('lampada').src = './imagens/lampada_quebrada.jpg'
        quebrada = true;
    }
}
function reatauraLampada(){
    document.getElementById('lampada').src = './imagens/lampada_apagada.jpg'
    quebrada = false;
}