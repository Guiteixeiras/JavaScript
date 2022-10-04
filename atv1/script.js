function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora}`
  if (hora >= 0 && hora < 12) {
    img.src = 'dia.png'
    document.body.style.background = '#fdac53'
   }else if (hora >= 12 && hora <18) {
    img.src = 'tarde.png'
    document.body.style.background = '#AB0972'
   }else {
    img.src = 'noite.png'
    document.body.style.background = '#193D4B'
   }
}