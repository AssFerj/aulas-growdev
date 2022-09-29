"use strict";
const form = document.querySelector("#infos-prod");
const divErro = document.querySelector("#msg-erro");
const tabela = document.querySelector("#tbody");
const atualizarLocalStorage = (produtos) => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
};
const recuperarLocalStorage = () => {
    const produtos = JSON.parse(localStorage.getItem("produtos") || "[]");
    return produtos;
};
const preencherTabela = () => {
    const produtos = recuperarLocalStorage();
    tabela.innerHTML = "";
    for (const produto of produtos) {
        tabela.innerHTML += `
        <tr>
            <th scope="row">${produto.id}</th>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>${produto.prime ? "Sim" : "Não"}</td>
            <td>
                <img type="button" width="40" src="./img/delet.svg" onclick="removerProduto(${produto.id})" />
            </td>
        </tr>
    `;
    }
};
const salvarProduto = (event) => {
    event.preventDefault();
    console.log("passou pelo evento");
    divErro.innerHTML = "";
    const nome = form.nome.value;
    const preco = Number(form.preco.value);
    const prime = form.prime.checked;
    const erros = [];
    if (!nome || nome.length < 2) {
        erros.push("<p>Nome inválido</p>");
    }
    if (!preco || preco <= 0) {
        erros.push("<p>Preço inválido</p>");
    }
    if (erros.length > 0) {
        divErro.innerHTML = erros.join(" ");
        return;
    }
    const produtos = recuperarLocalStorage();
    produtos.push({ id: produtos.length + 1, nome, preco, prime });
    atualizarLocalStorage(produtos);
    alert("Produto salvo com sucesso");
    preencherTabela();
    form.reset();
};
const removerProduto = (id) => {
    const produtos = recuperarLocalStorage();
    const indexProduto = produtos.findIndex((produto) => produto.id === id);
    if (indexProduto < 0)
        return;
    produtos.splice(indexProduto, 1);
    atualizarLocalStorage(produtos);
    alert("Produto removido");
    preencherTabela();
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", salvarProduto);
document.addEventListener("DOMContentLoaded", preencherTabela);
