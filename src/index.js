import cipher from './cipher.js';
let lo_que_dijo = document.getElementById('encode')
let valor_lo_que_dijo = lo_que_dijo.value
let posiciones = document.getElementById('offset')
let valor_posicion = posiciones.value
let codificar = cipher.encode(valor_posicion, valor_lo_que_dijo).toUpperCase()
//agregar un div 

if(codificar !== null) {
    let new_div = document.createElement('div')
    new_div.setAttribute('class', 'textoCodificado')
    let div_codificador = document.getElementById('codificado')
    new_div.innerHTML = `<span class='nuevoDivCodificador'>${codificar}</span>`
    div_codificador.appendChild(new_div)
} 

console.log(codificar)
console.log(valor_lo_que_dijo)
console.log(valor_posicion)
console.log(cipher);
