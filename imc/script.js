function analisar() {

    let n = document.getElementById('nome').value
    let a = document.getElementById('altura').value
    let p = document.getElementById('peso').value
    let r = document.getElementById('res-conteudo')

    if (n == '' || a <= 0 || p <= '') {
        alert('Preecha todos os campos.')
    }

    let res = (p / (a * a)).toFixed(1)



    r.innerHTML = `${n}, <br> o seu imc é: <br> ${res}`
    // console.log(res)
}