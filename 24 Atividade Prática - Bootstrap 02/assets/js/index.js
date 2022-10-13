// Exercício 01
const myModal = new bootstrap.Modal(document.getElementById('Modal'));

function openModal(){
    myModal.show();
}
function closeModal(){
    myModal.hide();
}
function excludeData(){
    myModal.hide();
    console.log('Exclusão dos dados confirmada');
    myAlert('Exclusão dos dados confirmada', 'success');
}
function noExcludeData(){
    myModal.hide();
    console.log('Exclusão dos dados NÃO confirmada');
    myAlert('Exclusão dos dados NÃO confirmada', 'danger');
}

// Exercício 02
const accordItem1 = {
    codigo: 01,
    nome: "Title 01",
    detalhamento: "Detail 01"
}
const accordItem2 = {
    codigo: 02,
    nome: "Title 02",
    detalhamento: "Detail 02"
}
const accordItem3 = {
    codigo: 03,
    nome: "Title 03",
    detalhamento: "Detail 03"
}

const listItem = [accordItem1, accordItem2, accordItem3];

let addItem = "";

for(item of listItem){
        const accordionItem = `
            <div class="accordion-item">
                <h2 class="accordion-header" id="accordion-${item.codigo}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-accordion-${item.codigo}" aria-expanded="true" aria-controls="collapseOne">
                        ${item.nome}
                    </button>
                </h2>
                <div id="collapse-accordion-${item.codigo}" class="accordion-collapse collapse" aria-labelledby="accordion-${item.codigo}" data-bs-parent="#accordion">
                    <div class="accordion-body">
                        Detalhamento: ${item.detalhamento}
                    </div>
                </div>
            </div>
        `
        addItem += accordionItem;
    };

const accordionContainer = document.getElementById('accordion');
accordionContainer.innerHTML = addItem;

// Exercício 03
const containerAlert = document.getElementById('container-alert');

const myAlert = (message, type) => {
    const wrapper = document.createElement("div");

    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
            <div>${message}</div>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `

    containerAlert.append(wrapper);
};