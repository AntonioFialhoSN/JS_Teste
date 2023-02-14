function rum (){
    var ini = Number(document.getElementById('txt1').value)
    var fim = Number(document.getElementById('txt2').value)
    var pas = Number(document.getElementById('txt3').value)
    var res = document.getElementById('resultados')
    var txt = ``
    for(var i = ini; i < fim; i += pas){
        txt += ` ${i} -`
    }
    res.style.textAlign = 'center'
    res.innerHTML= `${txt} ${fim}`
}
