function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador20 = 0
    let contador10 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 20:
                valorSaque -= 20
                contador20++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador20, contador10)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 20) {
        return 20
    } else if (valorSaque >= 10) {
        return 10
    } 
}

function elaborarResultado(contador100, contador50, contador20, contador10,) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador20 > 0) {
        resultado += `${contador20} nota(s) de R$ 20. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    return resultado
}

console.log(sacarDinheiro(150));