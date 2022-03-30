function analisar(){
    let n = document.getElementById('nome').value
    let a = parseInt(document.getElementById('altura').value)
    let p = parseInt(document.getElementById('peso').value)
    let r = document.getElementById('res-conteudo')

    let res = (p / Math.pow(a, 2)).toFixed(2)

    // r.innerHTML = `<br> ${n}, o seu IMC é: <br>
    // ${res}`
    r.innerHTML = `${n}, <br> o seu imc é: <br> ${res}`
}