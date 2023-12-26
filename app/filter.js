const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => {
    botao.addEventListener('click', filtrarLivros)
})

function filtrarLivros(event){
    botaoSelecionado = event.target.value;
    console.log(botaoSelecionado);
    let livrosFiltrados = botaoSelecionado = 'disponivel'? livros.filter(livro=> livro.quantidade>0) : livros.filter(livro => livro.categoria == botaoSelecionado);
    elementoParaInserirLivros.innerHTML = '';
    exibeLivrosNaTela(livrosFiltrados);
}
