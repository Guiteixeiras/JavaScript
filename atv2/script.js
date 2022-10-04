function verificar() {
  var data = new Data()
  var ano = data.getFukkYear()
  var fao = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('Verifique se está tudo realmente certo!!!!!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    res.innerHTML =`Iade calculada ${idade}`
  }
}