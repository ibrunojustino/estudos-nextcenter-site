//const name = document.getElementById('name')
let button = document.getElementById('button')
button.addEventListener('click', action)

function action(env) {
    env.preventDefault();
    let divresults = document.getElementById('valoresinput')
    let name = window.document.getElementById('name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    
    let nameValue = name.value
    let emailValue = email.value
    let passwordValue = password.value

    var object = {
        nome: nameValue,
        email: emailValue,
        senha: passwordValue,
    }

    let valoresdoObjeto = JSON.stringify(object)
    console.log(valoresdoObjeto)

    divresults.innerHTML = valoresdoObjeto

}
