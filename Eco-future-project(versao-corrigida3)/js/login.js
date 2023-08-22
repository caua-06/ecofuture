function mostrarSenha(){
    var inputPass = document.getElementById('senha');
    var btnShowPass = document.getElementById('btn-senha');

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text');
        btnShowPass.classList.replace('fa-eye','fa-eye-slash')
    }else{
        inputPass.setAttribute('type','password');
        btnShowPass.classList.replace('fa-eye-slash','fa-eye')
    }
}

//LOGIN
function entrar() {
   var usuario = document.querySelector('#usuario')
   var userLabel = document.querySelector('#usuarioLabel')

   var senha = document.querySelector('#senha')
   var senhaLabel = document.querySelector('#senhaLabel')
   let listaUser = []

    let userValid = {
        usuario:'',
        
        senha:''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {

        if(usuario.value == item.usuariocad && senha.value == item.senhacad){
            userValid = {
                usuario: item.usuariocad,
                
                senha: item.senhacad
            }
        }
    })

    if(usuario.value == userValid.usuario && senha.value == userValid.senha){
        alert('Login efetuado com sucesso!')
        
    var ultimaPagina = localStorage.getItem('ultimaPagina');
    if (ultimaPagina) {
    window.location.href = ultimaPagina;
    }

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)


    } else {
        alert('Algo deu errado')

        usuarioLabel.setAttribute('style', 'background-color:red')
        senhaLabel.setAttribute('style', 'background-color:red')

        usuarioLabel.innerHTML = 'Usuario <span>*Usuario ou senha incorretos</span>'
        senhaLabel.innerHTML = 'Senha <span>*Senha incorreta</span>'
    }

}