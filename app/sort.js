const botaoOrderdarPreco = document.getElementById('btnOrdenarPorPreco');

botaoOrderdarPreco.addEventListener('click',ordernaLivrosPorPreco);

function ordernaLivrosPorPreco(){
    //debugger
    let livrosOrdenados = livros.sort( (a,b) => a.preco - b.preco);
    exibeLivrosNaTela(livrosOrdenados);
}