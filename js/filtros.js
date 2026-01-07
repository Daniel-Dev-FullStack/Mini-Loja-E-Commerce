$(document).ready(function () {
  const cards = $("#lista-produtos .card");
  const selectPrecos = $("#selectPrecos");
  const selectCategorias = $("#selectCategorias");

  // FILTRO POR BARRA DE PESQUISA
  $("#pesquisar").on("keyup", function () {
    var valorPesquisa = $(this).val().toLowerCase();
    $(cards).filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(valorPesquisa) > -1);
    });
  });

  // FILTRO POR CATEGORIA
  $(selectCategorias).change(function () {
    // PEGA O VALOR SELECIONADO PELO USUÁRIO
    var categoriaSelecionada = $(this).val();

    // PRIMEIRO ESCONDE TUDO
    cards.hide();

    if (categoriaSelecionada == "todos") {
      $(cards).fadeIn();
    } else {
      $(cards).hide();
      cards.filter("." + categoriaSelecionada).fadeIn();
    }
  });

  //FILTRO POR PREÇO
  $(selectPrecos).change(function () {
    // PEGA O VALOR SELECIONADO PELO USUÁRIO
    const precoSelecionado = $(this).val();

    // PRIMEIRO ESCONDE TUDO
    cards.hide();

    // CASO O VALOR SEJA "TODOS"
    if (precoSelecionado === "todos") {
      cards.fadeIn();
    }

    // PERCORRE CARD POR CARD E DECIDE QUAL MOSTRAR
    cards.each(function () {
      const precoProduto = Number($(this).data("preco"));

      if (precoSelecionado === "0-100") {
        if (precoProduto <= 100) {
          $(this).fadeIn();
        }
      } else if (precoSelecionado === "100-300") {
        if (precoProduto > 100 && precoProduto <= 300) {
          $(this).fadeIn();
        }
      } else if (precoSelecionado === "300+") {
        if (precoProduto > 300) {
          $(this).fadeIn();
        }
      }
    });
  });
});
