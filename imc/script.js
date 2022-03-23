function analisar(){
    let n = document.getElementById('nome').value
    let a = parseInt(document.getElementById('altura').value)
    let p = parseInt(document.getElementById('peso').value)
    let d = document.getElementById('dados')

    let res = (p / Math.pow(a, 2))

    d.innerHTML = `<br> ${n}, o seu IMC é: <br>
    ${res}`
}