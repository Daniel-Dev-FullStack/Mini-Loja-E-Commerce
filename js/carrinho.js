$(document).ready(function () {
  // SALVAR NO LOCALSTORAGE
  function salvarCarrinho(item) {
    const carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];
    carrinho.push(item);
    localStorage.setItem("meuCarrinho", JSON.stringify(carrinho));
  }

  // APARECE ALERTA DE AVISO DE COMPRA AO CLICAR NOS BOTÕES AMARELOS
  $("#lista-produtos").on("click", ".btn-outline-warning", function () {
    $(".alert-warning").stop(true, true).fadeIn().delay(3000).fadeOut();
  });

  $("#lista-produtos").on("click", ".btn-success", function () {
    //APARECE ALERTA DE SUCESSO NA ADIÇÃO AO CARRINHO AO CLICAR NOS BOTÕES VERDES
    $(".alert-success").stop(true, true).fadeIn().delay(3000).fadeOut();
    // CRIA O ITEM COM BASE NOS DADOS "DATA" DO BOTÃO CLICADO
    const item = {
      id: $(this).data("id"),
      imagem: $(this).data("imagem"),
      nome: $(this).data("nome"),
      preco: Number($(this).data("preco")),
    };

    salvarCarrinho(item);
  });

  var listaCarrinho = $(".lista-carrinho");

  // CARREGA DINÂMICAMENTE OS ITENS ARMAZENADOS NA PÁGINA CARRINHO
  const carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];

  if (carrinho.length === 0) {
    listaCarrinho.html("<li>Carrinho vazio</li>");
    return;
  }

  // PARA CADA ITEM ARMAZENADO CRIE UMA LI PARA ELE DENTRO DA "LISTA-CARRINHO"
  carrinho.forEach((item) => {
    listaCarrinho.append(`
    <li 
      data-preco="${item.preco}" 
      data-id="${item.id}" 
      class="item-carrinho list-group-item d-flex align-items-center justify-content-between"
    >
        <img src="${item.imagem}" class="me-3 rounded" width="50">

        <div class="flex-grow-1">
            <h6 class="mb-0">${item.nome}</h6>
            <small class="text-muted">R$ ${item.preco.toFixed(2)}</small>
        </div>

    

        <button 
          data-id="${item.id}" 
          class="btn btn-sm btn-outline-danger"
        >
          ✕
        </button>
    </li>
  `);
  });

  // CALCULO DE VALOR TOTAL
  var totalCarrinho = 0;

  var totalCarrinho = 0;

  $(".item-carrinho").each(function () {
    let precoUnitario = parseFloat($(this).data("preco"));
    totalCarrinho += precoUnitario;
  });

  $("#total").text("R$ " + totalCarrinho.toFixed(2));

  $("#total").text("R$ " + totalCarrinho.toFixed(2));

  // QUANTIDADE DE PRODUTOS NO CARRINHO
  $("span.badge.bg-primary").text(carrinho.length);

  // REMOVER CARRINHO AO CLICAR NO BOTÃO VERMELHO
  $(listaCarrinho).on("click", ".btn-outline-danger", function () {
    let id = $(this).closest("li").data("id");

    let carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];

    carrinho = carrinho.filter((item) => item.id !== id);

    localStorage.setItem("meuCarrinho", JSON.stringify(carrinho));

    $(this).closest("li").remove();

    // RECALCULA VALOR TOTAL DO CARRINHO

    var totalCarrinho = 0;

    $(".item-carrinho").each(function () {
      let precoUnitario = parseFloat($(this).data("preco"));

      totalCarrinho += precoUnitario;

      $("#total").text("R$" + totalCarrinho.toFixed(2));
    });

    if (carrinho.length === 0) {
      $("#total").text("R$ 0.00");
      listaCarrinho.html("<li>Carrinho vazio</li>");
      $("span.badge.bg-primary").text(0);
      return;
    }

    // ATUALIZA QUANTIDADE DE ITENS NO CARRINHO
    $("span.badge.bg-primary").text(carrinho.length);
  });
});
