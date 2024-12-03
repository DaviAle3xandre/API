const url = 'https://dummyjson.com/products';

async function buscarProdutos() {
    try {
        const resposta = await fetch(url);
        
        if (resposta.status === 200) {
            const dados = await resposta.json();
            exibirProdutos(dados.products);
        } else {
            console.error('Erro na requisição:', resposta.status);
        }
    } catch (erro) {
        console.error('Erro ao buscar produtos:', erro);
    }
}

function exibirProdutos(produtos) {
    const contenedorProdutos = document.getElementById('produtos');
    contenedorProdutos.innerHTML = "";
    produtos.forEach(produto => {
        const elementoProduto = document.createElement('div');
        elementoProduto.classList.add('produto');
        elementoProduto.innerHTML = `
            <h2>${produto.title}</h2>
            <p>${produto.description}</p>
            <p><strong>Preço:</strong> $${produto.price}</p>
        `;
        contenedorProdutos.appendChild(elementoProduto);
    });
}

document.getElementById('carregarProdutos').addEventListener('click', buscarProdutos);