function carregar(){
    var msg = window.document.querySelector('div.msg')
    var img = window.document.getElementById('imagem')
    var res = window.document.querySelector('div.res')
    var fundo = window.document.querySelector('body')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        res.innerHTML = 'Bom Dia'
        fundo.style.backgroundColor = '#e8eeee'
    } else if(hora >= 12 && hora < 18 ){
        img.src = 'imagens/tarde.jpg'
        res.innerHTML = 'Boa tarde'
        fundo.style.backgroundColor = '#ecb06c'
    } else {
        img.src = 'imagens/noite.jpg'
        res.innerHTML = 'Boa Noite'
        fundo.style.backgroundColor = '#031cf8c0'
    }
}

/*
não irei fazer o segundo exercicios. mas existe uma novidade só no javascript

coding

var img = document.createElement('img')
img.setAttribute('id','foto')

img.setAttribute('src', 'local foto/nome da foto. extensão')
rex.append/Child(img)

*/
