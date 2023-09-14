// script.js

let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produtoId) {
    const produto = {
        id: produtoId,
        nome: `Produto ${produtoId}`,
        preco: produtoId === 1 ? 50 : 40,
    };

    carrinho.push(produto);
    total += produto.preco;

    const carrinhoLista = document.getElementById('carrinho-lista');
    const totalCarrinho = document.getElementById('total-carrinho');

    const itemCarrinho = document.createElement('li');
    itemCarrinho.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    carrinhoLista.appendChild(itemCarrinho);

    totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
}

function finalizarCompra() {
    alert('Compra finalizada! Total: R$ ' + total.toFixed(2));
    carrinho = [];
    total = 0;
    const carrinhoLista = document.getElementById('carrinho-lista');
    carrinhoLista.innerHTML = '';
    const totalCarrinho = document.getElementById('total-carrinho');
    totalCarrinho.textContent = 'R$ 0,00';
}