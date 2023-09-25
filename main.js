'use strict'

const abrir = document.getElementById('abrir')
const fechar = document.getElementById('fechar')

function abrirMenu (){
    const header = document.getElementById('header')
    header.classList.add('menu')
}

function fecharMenu(){
    const header = document.getElementById('header')
    header.classList.remove('menu')
}
<<<<<<< HEAD

abrir.addEventListener('click', abrirMenu)
fechar.addEventListener('click', fecharMenu)

=======
abrir.addEventListener('click', abrirMenu)
fechar.addEventListener('click', fecharMenu)
>>>>>>> 9c6469dfd243f369395086b706086c2d3e880cbf
