var idade = 46
if (idade <16){
    console.log(`Não vota`)
} else {
    if (idade <= 18){
        console.log(`voto não é obrigatório`)
    }else{
        if (idade >= 65){
            console.log(`voto não é obrigatório`)
        } else{
            console.log(`voto é obrigatório`)
        }   
    }
}
//=======================================
if (idade >= 18 && idade < 65){
    console.log(`voto é obrigatório`)
}else{
    if (idade >= 16 || idade >= 65){
        console.log(`voto não é obrigatório`)
    }else{
        console.log(`Não vota`) 
    }
}
//==============================
if (idade >= 18 && idade < 65){
    console.log(`voto é obrigatório`)
} else if (idade >= 16 || idade >= 65) {
    console.log(`voto não é obrigatório`)
} else {
    console.log(`Não vota`)
}