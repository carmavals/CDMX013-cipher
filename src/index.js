import cipher from './cipher.js';

let obra = {
    p1: 'Op Ibz Dvfsqp Qsftfouf Tjo Nfouf.    Ubnqpdp Ibz Dvfsqp Qsftfouf Tjo Hpcjfsopt.    Dvboep Qsftfoué Nj Dvfsqp Op Ftubcb Qsftfouf Zp Fo Fm Ftqbdjp.    Mp Usbcbké, Mp Ftdvmqí, Dbshvé 5 Lh Fo Dbeb Csbap,    10 Lh Fo Dbeb Qjfsob Z Dpssí 30 Njovupt.    Mvfhp Ef Ftp, Nj Dvfsqp Tf Qsftfouó, Fyjtujó.    Nj Dvfsqp, Nj Dvfsqb, Nj Dvfsqf,    Wbt B Bcsjs Mb Ofwfsb Z Wbt B Fodpousbs Mp Rvf Tfb Qbsb Bmjnfoubsuf Qftf B Rvf Mb Njube Ef Mb    Qpcmbdjóo Op Qvfefo Dpnfs Mp Njtnp Rvf Uv,    Wbt B Dpssfs 35 Njovupt Nát, 40 P 45.    Op Ibt Dvnqmjep 26 Bñpt Qbsb Ibcmbs Ef Uv Qftp.    Op Uf Ibt Hsbevbep Qbsb Ibcmbs Ef Uv Qftp.    Op Usbcbkbt Qbsb Ibcmbs Ef Uv Qftp.    Op Qbtfbt Bm Qfssp Qbsb Ibcmbs Ef Uv Qftp.    Op Uf Ujuvmbtuf Qbsb Ibcmbs Ef Uv Qftp. ',
    p2: 'CHZ H LUJLUKLY SH JVTWBAHKVYH, CHZ H TPYHY SH WHUAHSSH VZJBYH WVY 2 TPUBAVZ, SBLNV, 5 TPUBAVZ TÁZ. HAYÁZ ABFV, ZBJLKLU SHZ THZHJYLZ TÁZ HAYVJLZ QHTÁZ HUALZ CPZAHZ ',
    p3: 'Iqfanao Oa Yknpwj Ah Ywxahhk Bnajpa W Qj Wpwqz, Pq Mqeoeanwo Mqa Yknpwnpa Ah Ywxahhk Bqaoa Iáo Lkhípeyk. Hw Laopa Dw Nacnaowzk, Pa Dw Ykjpwcewzk U Oecqao Ienwjzk Pq Ykilqpwzknw ',
    p4: 'Jut B Nbudi!',
    p5: "Jhkh Zlthuh Bu Hjapcpzah Hthgóupjv Tblyl H Sh Why Xbl Ab Lzjypilz Lu Qhchzjypwa Sla P = 0, Sla  Chyphisl = () => {} F Sla Tp_jblywh = ‘sv Xbl Zlh Xbl Kpvz Xbplyh’.",
    p6: 'Asylbm Rc Rmaó Pcepcqyp Y Rsq Rgcppyq 50% Bc Jy Nmzjyagól Dckclgly Fyzíy Bcqyncpcagbm W Aml Cjjyq Rmbmq    Jmq Ápzmjcq.. Rs Kybpc Wy Lm Cqryzy W Rs Nybpc Lm Rc Pcamlmaíy. Rc Dsgqrc Yj Zmqosc, Y Zsqaypjyq Y    Rmbyq,    Y Rmbcq. Apsxyqrc Cj Pím, Pckyqrc, Lybyqrc, Ncpbgqrc Yjeslyq Cvrpckgbybcq. Bczyhm Bc Sly Mpchy Bc    Cjcdylrc    Réalgaykclrc Amlmagby Amkm Yjmayqgy Ykyxólgay Jyq Clamlrpyqrc Y Rmbyq Jyq Osc Dyjryzyl, Rmbyq Clylyq.',
    p7: 'Prolhuh Hvwduíd Rujxoorvr Gh Wí, Sdud Ydujdv Oorvd Qr Halvwhv, Pdujdulwwh Gxudv Txlvlhud Txh Fxhqwhv Páv Klvwruldv Gh Dpru Shur Wx Vror Vdehv Ghfodudu Yduldeohv Hq Ohqjxdmhv Gh Surjudpdflóq.',
    p8: ' Tcmow Lm Ycm Bwlia Tia Ibzwkqlilma Lmt Ucvlw Ikijmv, Lmkqlma Ycm Ma Uwumvbw Lm Xwvmzbm I Bzijiriz    ',
    p9y10: ['Xm Mgfadm: Ngqzae Píme, Nuqzhqzupa, ¿Qz Cgé Bgqpa Mkgpmdxq?','Xae Oxuqzfqe Tayndqe Tmoqz Cgq Fq Bdgqnqe Fapme Xme Bdqzpme Badcgq Puoqz Cgq Qdqe Pq Xm Oazfqjfgdm Pq Ege Qebaeme. Qzfazoqe Fq Bdgqnme Fapme Xme Emxupme Pq Nmña Pq Ráfuym Mdduqfm. Xme Oxuqzfme Fq Bdqsgzfmz Eandq Qx Oaxad, M Hqoqe Fq Tmxmsmz, Bad Yayqzfae Fq Mogemz Pq Yqzfudaem K Tmefm Fq Tmoqz Faymdxqe Rafae Oaz Xme Bdqzpme Bgqefme Oaz Fg Oqxgxmd Bmdm Cgq Xgqsa Eq Xme Ymzpqe. '],
    p11: 'It Nqvit Lmt Líi, Bc Kcmzxw, Bc Kcmzxm, Bc Kcmzxi G Bc Oitmzíi Lm Nwbwa Vw Awv Bcgwa, Bcgma, Bcgia, Awv Uivqycíma Ycm Aquctiv Twa Kcmzxwa Lm Tia Maxwaia Lm Bca Ktqmvbma.'

}

let form = document.getElementById('form1')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let input_codificar = document.getElementById('encode').value
    let avanzar = document.getElementById('offset').value

    let codificar = cipher.encode(Number(avanzar), input_codificar)
    let div_resultado = document.createElement('div')
    div_resultado.setAttribute('class', 'divResultado')
    if (input_codificar !== null && avanzar !== null) {
        let div_codificar = document.getElementById('experimentar')
        div_resultado.innerText = `${codificar.toLocaleUpperCase()}`
        div_codificar.appendChild(div_resultado)
    }

    // console.log(codificar)
    // console.log(avanzar, input_codificar)
})

let form_2 = document.getElementById('form2')
form_2.addEventListener('submit', function (event) {
    event.preventDefault()
    let input_decodificador = document.getElementById('decode').value
    //let mayuscula = input_decodificador.toUpperCase()
    let retroceder = document.getElementById('offset2').value

    let decodificar = cipher.decode(Number(retroceder), input_decodificador.toUpperCase())
    let div_resultado = document.createElement('div')
    div_resultado.setAttribute('class', 'divResultado1')
    if (input_decodificador !== null && retroceder !== null) {
        let div_codificar = document.getElementById('experimentar')
        div_resultado.innerText = `${decodificar.toLocaleUpperCase()}`    
    div_codificar.appendChild(div_resultado)
    }
    // console.log(decodificar)
    // console.log(retroceder, input_decodificador, decodificar)
})


let form_pista1 = document.getElementById('pista1')
form_pista1.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
    textos_obra[0].innerText = `${cipher.decode(Number(all_li[0].value), obra.p1.toUpperCase())}`
    textos_obra[0].style.color = 'white'
})

let form_pista2 = document.getElementById('pista2')
form_pista2.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
    textos_obra[1].innerText = `${cipher.decode(Number(all_li[1].value),obra.p2.toUpperCase())}`
    textos_obra[1].style.color = 'white'
})


let form_pista3 = document.getElementById('pista3')
form_pista3.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[2].innerText = `${cipher.decode(Number(all_li[2].value), obra.p3.toUpperCase())}`
     textos_obra[2].style.color = 'white'
})


let form_pista4 = document.getElementById('pista4')
form_pista4.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[3].innerText = `${cipher.decode(Number(all_li[3].value), obra.p4.toUpperCase())}`
     textos_obra[3].style.color = 'white'
})

let form_pista5 = document.getElementById('pista5')
form_pista5.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[4].innerText = `${cipher.decode(Number(all_li[4].value), obra.p5.toUpperCase())}`
     textos_obra[4].style.color = 'white'
})

let form_pista6 = document.getElementById('pista6')
form_pista6.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[5].innerText = `${cipher.decode(Number(all_li[5].value), obra.p6.toUpperCase())}`
     textos_obra[5].style.color = 'white'
})

let form_pista7 = document.getElementById('pista7')
form_pista7.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[6].innerText = `${cipher.decode(Number(all_li[6].value), obra.p7.toUpperCase())}`
     textos_obra[6].style.color = 'white'
})
let form_pista8 = document.getElementById('pista8')
form_pista8.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[7].innerText = `${cipher.decode(Number(all_li[7].value), obra.p8.toUpperCase())}`
     textos_obra[7].style.color = 'white'
})

let form_pista9_10 = document.getElementById('pista9_10')
form_pista9_10.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[8].innerText = `${cipher.decode(Number(all_li[8].value), obra.p9y10[0].toUpperCase())}`
     textos_obra[8].style.color = 'white'
     textos_obra[9].innerText = `${cipher.decode(Number(all_li[8].value), obra.p9y10[1].toUpperCase())}`
     textos_obra[9].style.color = 'white'
})

let form_pista11 = document.getElementById('pista11')
form_pista11.addEventListener('submit', function(event){
    event.preventDefault()
    let all_li = document.querySelectorAll('.input_obra')
     let textos_obra = document.querySelectorAll('.textos_obra')
    
     textos_obra[10].innerText = `${cipher.decode(Number(all_li[9].value), obra.p11.toUpperCase())}`
     textos_obra[10].style.color = 'white'
     
})














// let form_pista1 = document.getElementById('pista1')
// form_pista1.addEventListener('submit', function(event){
//     event.preventDefault()
//     for(i of all_li){
//         let valor = i.value
//         console.log(valor)
//     }
    
// })

// let form_pista2= document.getElementById('pista2')
// let form_pista3= document.getElementById('pista3')
// let form_pista4= document.getElementById('pista4')
// let form_pista5= document.getElementById('pista5')
// let form_pista6= document.getElementById('pista6')
// let form_pista7= document.getElementById('pista7')
// let form_pista8= document.getElementById('pista8')
// let form_pista9_10= document.getElementById('pista9_10')
// let form_pista11= document.getElementById('pista11')
















//ESTA ES MI PROPUESTA EN LOOP : 
// let form_3 = document.getElementById('form3')
// form_3.addEventListener('submit', function(event){
    
//     event.preventDefault()
//     if(event !== null){
//         console.log('esta funionando')
//         }
   
       
// let all_li = document.querySelectorAll('.input_obra')
// let textos_obra = document.querySelectorAll('.textos_obra')

// for(let z of textos_obra){
//     let texto = z.innerText
//     console.log(texto)
//    for(let i = 0; i<all_li; i++){
//     let decodifica = cipher.decode(Number(i.value), texto.toUpperCase())
//     console.log(decodifica)
//    }    
// }

// })










// let decodificar = cipher.decode(Number(all_li.forEach(numero => numero.value)), textos_obra.forEach(textos_descifrados => textos_descifrados.innerText))
// console.log(decodificar)
    // for(let z of textos_obra && i ){
    //     let valor_textos = z.innerText
    //     console.log(valor_textos)
    //     for(let i of all_li){
    //         let valor = i.value
    //         console.log(valor)
    //         
    //         console.log(decodificar)
    //     }
    // }
    

console.log(cipher);
