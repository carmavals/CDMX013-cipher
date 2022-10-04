const cipher = {
  encode(offset, string) {

    let texto_separado = string.split('')
    let texto_cifrado = ''
    for (let i in texto_separado) {
      let valor_ascci = string.charCodeAt(i)
      if (valor_ascci >= 97 && valor_ascci <= 122) {
        texto_cifrado += String.fromCharCode((valor_ascci - 97 + offset) % 26 + 97)
      } else if (valor_ascci >= 65 && valor_ascci <= 90) {
        texto_cifrado += String.fromCharCode((valor_ascci - 65 + offset) % 26 + 65)
      } else {
        texto_cifrado += String.fromCharCode(valor_ascci)
      }
    }
    return texto_cifrado


  },
  decode(offset, string) {
    let texto_separado = string.split('')
    let texto_descifrado = ''
    for (let i in texto_separado) {
      let valor_ascci = string.charCodeAt(i)
      if (valor_ascci >= 97 && valor_ascci <= 122) {
        texto_descifrado += String.fromCharCode((valor_ascci + 97 - offset) % 26 + 97)
      } else if (valor_ascci >= 65 && valor_ascci <= 90) {
        texto_descifrado += String.fromCharCode((valor_ascci + 65 - offset) % 26 + 65)
      } else {
        texto_descifrado += String.fromCharCode(valor_ascci)
      }
    }


    return texto_descifrado
  }

};

export default cipher;
