function trocaValores(a, b){
    if(a.length == b.length){
        for(let i = 0; i < a.length; i++){
            a[i] = a[i] + b[i]
            b[i] = a[i] - b[i]
            a[i] = a[i] - b[i]
        }
    }else{
        return 'vetores diferentes'
    }

    console.log(a)
    console.log(b)
}

let a = [3]
let b = [5]

trocaValores(a, b)