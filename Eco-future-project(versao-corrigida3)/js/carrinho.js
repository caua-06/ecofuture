function displayCartItems() {
    var cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    // Recupera os itens do carrinho do armazenamento local
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (cartItems.length === 0) {
      cartItemsDiv.innerHTML = '<p class=errorMessage>Seu carrinho está vazio.</p>';
    } else {
      for (var i = 0; i < cartItems.length; i++) {
        var produto = cartItems[i];

        var cardProduto = document.createElement('div');
        cardProduto.className = 'card-produto';
        cardProduto.innerHTML = 
  
         '<div class=produtoInfoConteiner>' +
        '<img class=imgproduto src="' + produto.imgSrc + '" alt="Imagem do produto">' +
        '<h3>' + produto.nomeProduto + '</h3>' +
         '<p>' + produto.preco + '</p>' +
        '</div>' + 
        '<div class=info>' +
        '<h3>' + produto.nomeProduto + '</h3>' +
         '<p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit illo earum minus quas ad saepe delectus excepturi, quos, magni totam, nisi perspiciatis repudiandae recusandae dolores blanditiis possimus iure vitae fugiat?' + '</p>' +
         '<button> Comprar' + '</button>'
         
        

        var removeButton = document.createElement('button');
        removeButton.id = 'removeButton';
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', createRemoveButtonHandler(i));

        var produtoInfoConteiner = cardProduto.querySelector('.produtoInfoConteiner');
        produtoInfoConteiner.appendChild(removeButton);
       // cardProduto.appendChild(removeButton);

        cartItemsDiv.appendChild(cardProduto);
      }
    }
  }

  function createRemoveButtonHandler(index) {
    return function () {
      var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

      if (index >= 0 && index < cartItems.length) {
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        displayCartItems();
      }
    };
  }

  // Exibe os itens do carrinho quando a página é carregada
  displayCartItems();

  // Atualiza os itens do carrinho quando ocorrem alterações
  window.addEventListener('storage', function (event) {
    if (event.key === 'cartItems') {
      displayCartItems();
    }
  });