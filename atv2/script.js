function verificar() {
    //window.alert('funciona')  apenas um texte
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano').value;
    var res = document.querySelector('div#res')
    console.log(fano);
    if (fano == 0 || fano > ano) {
      window.alert('Verifique se está tudo realmente certo!!!!!')
    } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - fano
      var genero = ''
      var img = document.createElement ('img')
      img.setAttribute ('id',  'foto')
      if(fsex[0].checked) {
        genero = 'homem'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/Ocriança.png')
        }else if (idade <21 ){
           //adolescente
           img.setAttribute('src', 'imagens/Ojovem.png')
        }else if (idade <50 ){
          //adulto
          img.setAttribute('src', 'imagens/adulto.png')
        }else{
         //idoso
         img.setAttribute('src', 'imagens/idoso.png')
        }
      }else if(fsex[1].checked){
        genero = 'mulher'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src', 'imagens/Acriança.png')
        }else if (idade <21 ){
           //adolescente
           img.setAttribute('src', 'imagens/Ajovem.png')
        }else if (idade <50 ){
          //adulto
          img.setAttribute('src', 'imagens/adulta.png')
        }else{
         //idoso
         img.setAttribute('src', 'imagens/idosa.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML =`detectamos ${genero} com ${idade} anos de idade`
      res.appendChild(img)
    }
  }
 
  var button = document.getElementById('button');
  button.addEventListener('click',()=>{
    verificar();
    
  })