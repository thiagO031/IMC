function analisar() {


    let n = document.getElementById('nome').value
    let a = parseInt(document.getElementById('altura').value)
    let p = parseInt(document.getElementById('peso').value)
    let r = document.getElementById('res-conteudo')

    let res = (p / Math.pow(a, 2))

    if (n == '' || a >= 0 || p >= 0) {
        alert('Preecha todos os campos.')
    }

    r.innerHTML = `${n}, <br> o seu imc é: <br> ${res}`
    console.log(res)
}