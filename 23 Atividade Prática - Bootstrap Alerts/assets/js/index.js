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

const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

function openModal(){
    myModal.show();
}

function closeModal(){
    myModal.hide();
}