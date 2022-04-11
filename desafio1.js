function calcularIMC(kilos, altura, imc){
    altura = altura /100
     imc = (kilos / (altura * altura))

 if(imc < 18){
     console.log('Abaixo do peso')
 }else if(imc < 25){
     console.log('Peso normal')
 }else if(imc > 25){
     console.log('Acima do peso')
 }
 
 return imc
}

console.log(calcularIMC(88, 190).toFixed(2))



