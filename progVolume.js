let res = document.getElementById('res')

function calcularVolume(raio,altura){
    return Math.PI * raio *raio * altura
}
    
function calcular(){
    let raio = Number(document.getElementById('raio').value)
    let altura = Number(document.getElementById('altura').value)

    let volume = calcularVolume(raio,altura)

    res.innerHTML =` `
    res.innerHTML =` O volume do Cilindro é: ${volume}mm³ `
}