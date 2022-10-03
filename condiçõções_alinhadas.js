

  var idade = 65
  if (idade < 16) {
    console.log ('Não vota')
  }else {
    if (idade < 18) {
      console.log ('Voto opcional') 
      }else {
          if (idade < 65) {
            console.log ('Voto obrigatorio')
          }else{
              if (idade < 200) {
            console.log('Voto opcional')
          }
        }
      }
  }

  var hora = 8
  console.log(`Agora são ${hora} horas`)
  if (hora < 12) {
    console.log('bom dia')
  }else if (hora <= 18){
    console.log('boa tarde')
  }else {
    console.log('boa noite')
  }

  var agora = new Date()
  var hora = agora.getHours()
  console.log(`Agora são ${hora} horas`)
  if (hora < 12) {
    console.log('bom dia')
  }else if (hora <= 18){
    console.log('boa tarde')
  }else {
    console.log('boa noite')
  }