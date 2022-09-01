document.querySelector('body').style.backgroundColor = '#0E0753';

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.style.backgroundColor = '#EA7B04';
    card.style.borderRadius = '1rem';
    card.style.padding = '1.5rem';
    card.style.margin = '1rem';
    card.style.maxWidth = '9rem';
});

const headers = document.querySelectorAll('.titulo-card');
headers.forEach(header => {
    header.style.color = '#0E0753';
    header.style.fontSize = '25px'
    header.style.textAlign = 'center'
    header.innerHTML = 'Meu Card';
});

const descriptions = document.querySelectorAll('.descricao-card');
descriptions.forEach(description => {
    description.style.color = '#FFF';
    description.style.textAlign = 'center';
    description.innerHTML = 'Descrição modificada pelo JavaScript'
});

const buttonsEdit = document.querySelectorAll('.botao-editar');
buttonsEdit.forEach(button => {
    button.style.color = '#FFF';
    button.style.margin = '1.5px';
    button.style.backgroundColor = 'green';
    button.style.padding = '.5rem';
    button.style.border = 'none';
    button.style.borderRadius = '.5rem';
});

const buttonsDelete = document.querySelectorAll('.botao-apagar');
buttonsDelete.forEach(button => {
    button.style.color = '#FFF';
    button.style.margin = '1.5px';
    button.style.backgroundColor = 'red';
    button.style.padding = '.5rem';
    button.style.border = 'none';
    button.style.borderRadius = '.5rem';
});

function editarCard(){
    alert("Clicou em Editar!")
}
function apagarCard(){
    const result = confirm("Tem certeza da exclusão do card?");
    result ? alert("Confirmado!") : alert("Cancelou!");
}