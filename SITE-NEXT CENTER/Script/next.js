let button1 = document.getElementById('seelessbutton')
let section01 = document.getElementById('section01')
let button2 = document.getElementById('see-every-thing-button')
button1.addEventListener('click', verMenos)
button2.addEventListener('click', verMais)

function verMenos(){
    section01.style.display = 'none'
    button2.style.display = 'block'
    button2.style.opacity = '100'
    button1.style.display = 'none'
}

function verMais(){
    section01.style.display = 'block'
    button1.style.display = 'block'
    button2.style.opacity = '0'
}