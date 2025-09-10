function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')  
// pegar a tag img
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    // se tiver light mode. adicionar a imagem light
    img.setAttribute('src', './assets/avatar light.png')
   } else {
    // se tiver com light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar dark.png')
    img.setAttribute('alt', 'Foto de perfil loja filial')
  }
          
}

