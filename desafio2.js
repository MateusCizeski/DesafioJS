function calcularMedia(valor1, valor2, valor3){
    let media = (valor1 + valor2 + valor3)/ 3

    console.log(media)
}

function media (vetor) {
    let soma = 0
    for(let i=0; i<vetor.length; i++) {
        soma += vetor[i]
    }

    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(media(vetor))


calcularMedia(10, 10, 10)