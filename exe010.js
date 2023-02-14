var agora = new Date()
var hora = agora.getHours()
//var hora = 4
console.log(`Agora são exatamente ${hora} horas.`)
if ( hora >= 0 && hora <= 5){
    console.log('Boa Madrugada')
}else if (hora > 5 && hora <= 12){
    console.log('Bom dia')
} else if ( hora > 12 && hora <= 18){
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}
/*
switch (){
    case valor1:

        break
    case valor2:

        break
    case valor3:

        break
    case valor4:

        break
    default:

        break (opcional)    
}
*/
var dia =  new Date()
var dia_sem = dia.getDay()
/*
0 - Domingo 
1 - Segunda 
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sabado
*/
switch (dia_sem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda ')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('ERRO dia invalido')
}