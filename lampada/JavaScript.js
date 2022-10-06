const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

//salvar a lampada para não regenerar 
function isLampBroken() {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
  if ( !isLampBroken ()) {
    lamp.src = './imagens/acessa.png';
  }
}
function lampOff () {
  if ( !isLampBroken ()) {
    lamp.src = './imagens/apagada.png';
  }
}
function lampBroken () {
    lamp.src = './imagens/quebrada.png';
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('dblclick', lampBroken);