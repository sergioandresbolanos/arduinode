/* eslint-disable no-use-before-define */
const jf = require('johnny-five');

const circuito = new jf.Board();

let ledcito;
let motorcito;
let celda;
let turno;

circuito.on('ready', prender);

function prender() {
  const configuracion = { pin: 'A0', freq: 50 };
  celda = new jf.Sensor(configuracion);

  ledcito = new jf.Led(13);
  ledcito.on();

  motorcito = new jf.Servo(8);
  motorcito.to(150);
  ondear();
}

function ondear()
{
  console.log("Luz : " + celda.value);
  var luz = celda.value;
  if(luz > 400)
  {
    ledcito.blink(1000);
    motorcito.to(180);
  }
  else if(100 < luz  && luz <= 400)
  {
    ledcito.blink(200);

    if(turno == 0)
    {
      turno = 1;
      motorcito.to(70);
    }
    else {
      turno = 0;
      motorcito.to(110);
    }
  }
  else if(luz < 100)
  {
    ledcito.blink(50);
    motorcito.to(0);
  }
  setTimeout(ondear, 1000);
}
