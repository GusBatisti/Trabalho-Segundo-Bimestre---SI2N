let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')

  if (inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else{
    inputSenha.setAttribute('type', 'password')
  }
})

let btnConfirm = document.querySelector('#verConfirmeSenha')

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmarSenha = document.querySelector('#confirmSenha')

  if ( inputConfirmarSenha.getAttribute('type') == 'password'){
     inputConfirmarSenha.setAttribute('type', 'text')
  } else{
     inputConfirmarSenha.setAttribute('type', 'password')
  }
})


function cadastrar(){
  if ((validNome && validEmail && validSenha && validConfirmSenha) == false){
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos</strong>'
     alert('Error...')
  }else{
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastro completo</strong>'
     alert('Cadastro completo!')
  }
}


let nome = document.querySelector('#username')
let labelNome = document.querySelector('#labelNome')
let validNome = false


nome.addEventListener('keyup', ()=>{
  if (nome.value.length <= 2){
    labelNome.setAttribute('style', 'color:red')
    labelNome.innerHTML = '<strong>Nome *Insira no minimo 3 caracteres</strong>'
    validNome = false
  }else{
    labelNome.setAttribute('style', 'color:green')
    labelNome.innerHTML = '<strong>Nome</strong>'
    validNome = true
  }
})


let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

function validateEmail(email) {
  let emailPattern =
    /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}

email.addEventListener('keyup', ()=>{
  if (validateEmail(email.value) !== true){
    labelEmail.setAttribute('style', 'color:red')
    labelEmail.innerHTML = '<strong>Email *Formato de email invalido</strong>'
    validEmail = false
    
  }else{
    labelEmail.setAttribute('style', 'color:green')
    labelEmail.innerHTML = '<strong>Email</strong>'
    validEmail = true
  }
})

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

senha.addEventListener('keyup', ()=>{
  if (senha.value.length < 8){
    labelSenha.setAttribute('style', 'color:red')
    labelSenha.innerHTML = '<strong>Senha *Insira no minimo 8 caracteres</strong>'
    validSenha = false
    
  }else{
    labelSenha.setAttribute('style', 'color:green')
    labelSenha.innerHTML = '<strong>Senha</strong>'
    validSenha = true
  }
})

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

confirmSenha.addEventListener('keyup', ()=>{
  if (senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color:red')
    labelConfirmSenha.innerHTML = '<strong>Senha *As senhas não conferem</strong>'
    validConfirmSenha = false
    
  }else{
    labelConfirmSenha.setAttribute('style', 'color:green')
    labelConfirmSenha.innerHTML = '<strong>Confirmar Senha</strong>'
    validConfirmSenha = true
  }
})

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

