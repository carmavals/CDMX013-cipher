import cipher from './cipher.js';

let form = document.getElementById('form1')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let input_codificar = document.getElementById('encode').value
    let avanzar = document.getElementById('offset').value

    let codificar = cipher.encode(Number(avanzar), input_codificar)
    let div_resultado = document.createElement('div')
    div_resultado.setAttribute('class', 'divResultado')
    if (input_codificar !== null && avanzar !== null) {
        let div_codificar = document.getElementById('codifica')
        div_resultado.innerText = `${codificar.toLocaleUpperCase()}`
        div_codificar.appendChild(div_resultado)
    }

    console.log(codificar)
    console.log(avanzar, input_codificar)
})

let form_2 = document.getElementById('form2')
form_2.addEventListener('submit', function (event) {
    event.preventDefault()
    let input_decodificador = document.getElementById('decode').value
    //let mayuscula = input_decodificador.toUpperCase()
    let retroceder = document.getElementById('offset2').value

    let decodificar = cipher.decode(Number(retroceder), input_decodificador.toUpperCase())
    let div_resultado = document.createElement('div')
    div_resultado.setAttribute('class', 'divResultado')
    if (input_decodificador !== null && retroceder !== null) {
        let div_codificar = document.getElementById('decodifica')
        div_resultado.innerText = `${decodificar.toLocaleUpperCase()}`    
    div_codificar.appendChild(div_resultado)
    }
    console.log(decodificar)
    console.log(retroceder, input_decodificador, decodificar)
})


//console.log(decodificar)







console.log(cipher);
