$(document).ready(function () {
  // LISTA DE PRODUTOS QUE SERÃO CARREGADOS DINÂMICAMENTE
  const produtos = [
    {
      id: 1,
      nome: "Caneca Minimalista Branca",
      preco: 139.5,
      categoria: "minimalista",
      imagem: "imagens/caneca-minimalista.png",
      descricao: "Caneca de cerâmica branca com design simples e elegante.",
    },
    {
      id: 2,
      nome: "Caneca com Frase Engraçada",
      preco: 344.1,
      categoria: "frases",
      imagem: "imagens/caneca-frase.png",
      descricao: "Caneca personalizada com frase divertida para o dia a dia.",
    },
    {
      id: 3,
      nome: "Caneca tema Geek Gamer",
      preco: 49.5,
      categoria: "geek",
      imagem: "imagens/caneca-geek.png",
      descricao: "Caneca temática gamer, ideal para quem ama jogos.",
    },
    {
      id: 4,
      nome: "Caneca com Foto Personalizada",
      preco: 54.95,
      categoria: "foto",
      imagem: "imagens/caneca-foto.png",
      descricao: "Caneca personalizada com foto, perfeita para presentear.",
    },
    {
      id: 5,
      nome: "Caneca de dia dos namorados",
      preco: 59.9,
      categoria: "datas",
      imagem: "imagens/caneca-datas.png",
      descricao: "Caneca feita para datas especiais.",
    },
    {
      id: 6,
      nome: "Caneca com Logo Corporativa",
      preco: 234.65,
      categoria: "corporativo",
      imagem: "imagens/caneca-corporativa.png",
      descricao: "Caneca personalizada com logotipo, ideal para empresas.",
    },
  ];

  var listaProdutos = $("#lista-produtos");

  // VARIÁVEL DE ARMAZENAMENTO
  var lista = "";

  // PARA CADA PRODUTO DA LISTA "PRODUTOS", CRIE UMA DIV E ADICIONE À LISTA VAZIA
  $.each(produtos, function (_, produto) {
    lista += `
         <div class="card col-md-3 ${
           produto.categoria
         }" data-preco="${produto.preco.toFixed(2)}" >
            <img src="${produto.imagem}" data-imagem="${produto.imagem}" data-nome="${produto.nome}" data-desc="${produto.descricao}" class="card-img-top" style="height: 200px;">
            <div class="card-body">
                <h5 class="card-title">${produto.nome}</h5>
                <p class="card-text">${produto.descricao}</p>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">${produto.preco.toFixed(2)}</li>
            </ul>

            <div class="card-body d-flex justify-content-between">
                <button type="button" class="btn btn-outline-warning">Comprar</button>
                <button
                  data-id="${produto.id}"
                  data-imagem="${produto.imagem}"
                  data-nome="${produto.nome}"
                  data-preco="${produto.preco.toFixed(2)}"
                  type="button"
                  class="btn btn-success">
    
                  Carrinho
                </button>
            </div>
        </div>
    `;
  });

  // CARREGA NA PÁGINA
  $(listaProdutos).html(lista);


  // ABRIR MODAL AO CLICAR NA IMAGEM DO PRODUTO
  $("#lista-produtos").on("click", ".card-img-top", function () {
    
    var imagem = $(this).data("imagem");
    var nome = $(this).data("nome");
    var descricao = $(this).data("desc"); 
    $("#modalImagem").attr("src", imagem);
    $("#modalNome").text(nome);
    $("#modalDescricao").text(descricao);
    $(".modal").fadeIn();

    $('.escuro').fadeIn();

    $(".btn-close").click(function () {
      $(".modal").fadeOut()
      $('.escuro').fadeOut();
    });

    
  });
});