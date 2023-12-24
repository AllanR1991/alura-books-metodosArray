function aplicarDesconto(livros){
    const desconto = 0.3;

    livrosComDesconto = livros.map(livro =>{
        //...livro => Copia todo os valores de livro
        // , alterando
        //preco => contendo a formula
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })

    return livrosComDesconto;
}