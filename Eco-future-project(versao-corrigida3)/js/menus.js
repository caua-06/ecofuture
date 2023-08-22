//DROPDOWN CATEGORIAS
var dropdown = document.querySelector('.dropdown')

$('.btnCategorias').click(function(){
    $('.dropdown').toggleClass('exibir')
})

//MENU LATERAL
$('.categorias').click(function(){
    $('.menuLateral ul .firstOption').toggleClass('mostra');
});

$('.ajudaUsuario').click(function(){
    $('.menuLateral ul .secondOption').toggleClass('mostra');
});

$('.btnMenu').click(function(){
    $('.menuLateral').toggleClass('mostra')
});

$('.btnFechar').click(function(){
    $('.menuLateral').toggleClass('mostra')
});
