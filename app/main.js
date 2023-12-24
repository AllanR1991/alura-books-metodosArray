const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'


let livros = [];

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endPointDaApi);//fetch => obtem dados de uma api
    livros = await res.json();
    
    let livrosComDesconto = aplicarDesconto(livros);

    exibeLivrosNaTela(livrosComDesconto);
}


getBuscarLivrosDaAPI()