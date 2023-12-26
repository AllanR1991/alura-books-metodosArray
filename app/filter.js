const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => {
    botao.addEventListener('click', filtrarLivros)
})

function filtrarLivros(event) {
    //debugger
    botaoSelecionado = event.target.value;
    console.log(botaoSelecionado);

    let livrosFiltrados = (botaoSelecionado == 'disponiveis') ?        
        filtrarProDisponibilidade() :
        filtrarPorCategoria() ;
    
    elementoParaInserirLivros.innerHTML = '';
    exibeLivrosNaTela(livrosFiltrados);
    if(botaoSelecionado == 'disponiveis'){
        const valorTotal = calcularValotTotalDeLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorCategoria() {
    return livros.filter(livro => livro.categoria == botaoSelecionado);
}

function filtrarProDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal){
    elementoComValorTotalLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por <span id="valor">${valorTotal}</span></p>
    </div>
    `

}


