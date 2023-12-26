const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibeLivrosNaTela(listaDeLivos) {
    elementoComValorTotalLivrosDisponiveis.innerHTML = '';

    listaDeLivos.forEach(livro => {
        
        const divLivro = document.createElement('div');
        divLivro.classList.add('livro');

        const imagemLivro = document.createElement('img');
        imagemLivro.classList.add('livro__imagens');
        imagemLivro.setAttribute('src', livro.imagem);
        imagemLivro.setAttribute('alt', livro.alt);
        
        livro.quantidade>0?
            imagemLivro.classList.remove('indisponivel'):
            imagemLivro.classList.add('indisponivel');

        const tituloLivro = document.createElement('h2');
        tituloLivro.classList.add('livro__titulo');
        tituloLivro.textContent = livro.titulo;

        const paragrafoAutor = document.createElement('p');
        paragrafoAutor.classList.add('livro__descricao');
        paragrafoAutor.textContent = livro.autor;

        const paragrafoPreco = document.createElement('p');
        paragrafoPreco.classList.add('livro__preco');
        paragrafoPreco.setAttribute('id', 'preco');
        paragrafoPreco.textContent = livro.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});

        const divTag = document.createElement('div');
        divTag.classList.add('tags');

        const span = document.createElement('span');
        span.classList.add('tag')
        span.textContent = livro.categoria;


        divLivro.append(imagemLivro);
        divLivro.append(tituloLivro);
        divLivro.append(paragrafoAutor);
        divLivro.append(paragrafoPreco);
        divTag.append(span)
        divLivro.append(divTag)
        elementoParaInserirLivros.append(divLivro)
    });
};