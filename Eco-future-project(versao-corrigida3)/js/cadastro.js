
var inputConfirmPass = document.getElementById('confirm-senha');
var btnShowConfirmPass = document.getElementById('btn-confirm-senha');

var inputPass = document.getElementById('senha');
var btnShowPass = document.getElementById('btn-senha');

//VARIAVEIS DOS INPUTS E LABELS

var usuario = document.querySelector('#usuario');
var labelUsuario = document.querySelector('#labelUsuario');
var validUsuario = false;

var email = document.querySelector('#e-mail');
var labelEmail = document.querySelector('#labelEmail');
var validEmail = false;

var senha = document.querySelector('#senha');
var labelSenha = document.querySelector('#labelSenha');
var validSenha = false;

var confirmsenha = document.querySelector('#confirm-senha');
var labelConfirmSenha = document.querySelector('#labelConfirmSenha');
var validConfirmSenha = false;

//VALIDAÇÃO EM TEMPO REAL
usuario.addEventListener('keyup', ()=>{
    if (usuario.value.length <= 2) {
        labelUsuario.setAttribute('style', 'background-color:red')
        labelUsuario.innerHTML = 'Usuário <span>*Insira no mínimo 3 caracteres</span>'
        validUsuario = false;
    } else {
        labelUsuario.setAttribute('style', 'color:#16CF8C')
        labelUsuario.innerHTML = 'Nome de usuário'
        validUsuario = true;
    }
})

email.addEventListener('keyup', ()=>{
    if (email.value.length <= 4) {
        labelEmail.setAttribute('style', 'background-color:red')
        labelEmail.innerHTML = 'E-mail <span>*Insira no mínimo 5 caracteres</span>'
        validEmail = false;
    } else {
        labelEmail.setAttribute('style', 'color:#16CF8C')
        labelEmail.innerHTML = 'E-mail de usuário'
        validEmail = true;
    }
})

senha.addEventListener('keyup', ()=>{
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'background-color:red')
        labelSenha.innerHTML = 'Senha <span>*Insira no mínimo 6 caracteres</span>'
        validSenha = false;
    } else {
        labelSenha.setAttribute('style', 'color:#16CF8C')
        labelSenha.innerHTML = 'Senha de usuário'
        validSenha = true;
    }
})

confirmsenha.addEventListener('keyup', ()=>{
    if (senha.value != confirmsenha.value) {
        labelConfirmSenha.setAttribute('style', 'background-color:red');
        labelConfirmSenha.innerHTML = 'Confirmar senha <span>*As senhas não coincidem</span>';
        validConfirmSenha = false;
    } else {
        labelConfirmSenha.setAttribute('style', 'color:#16CF8C');
        labelConfirmSenha.innerHTML = 'Confirme sua senha';
        validConfirmSenha = true;
    }
})

//SENHA
function mostrarSenha(){
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text');
        btnShowPass.classList.replace('fa-eye','fa-eye-slash')
    }else{
        inputPass.setAttribute('type','password');
        btnShowPass.classList.replace('fa-eye-slash','fa-eye')
    }
}



//CONFIRM SENHA
function mostrarConfirmSenha(){  
    if(inputConfirmPass.type === 'password'){
        inputConfirmPass.setAttribute('type','text');
        btnShowConfirmPass.classList.replace('fa-eye','fa-eye-slash')
    }else{
        inputConfirmPass.setAttribute('type','password');
        btnShowConfirmPass.classList.replace('fa-eye-slash','fa-eye')
    }
}

//EVENTO DE CADASTRO
function cadastrar(){
    if (validUsuario && validEmail && validSenha && validConfirmSenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push({
            usuariocad: usuario.value,
            emailcad: email.value,
            senhacad: senha.value
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        window.location.href = '../pages/login-page.html'

        alert('Cadastro Realizado Com Sucesso!')
    } else {
       alert('Preencha todos os campos corretamente!')
    }
}