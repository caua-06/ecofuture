if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página! ')
    window.location.href = '../pages/login-page.html'
}