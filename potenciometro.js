const jf = require('johnny-five');

const circuito = new jf.Board();

let led1;
let led2;
let led3;
let led4;

circuito.on("ready", prender)

function prender()
{
  const configuracion = { pin: "A0", freq: 50};
  potenciometro = new jf.Sensor(configuracion);

  led1 = new jf.Led(2);

  led2 = new jf.Led(3);

  led3 = new jf.Led(4);

  led4 = new jf.Led(5);

  repetir();
}

function repetir()
{
  console.log("el potenciometro tiene: " + potenciometro.value + " de resistencia");

  var resistencia = potenciometro.value;

  if(resistencia <= 1023 && resistencia >= 768)
  {
    led1.on();
    led2.off();
    led3.off();
    led4.off();
  }
  if(resistencia <= 767 && resistencia >= 512)
  {
    led1.off();
    led2.on();
    led3.off();
    led4.off();
  }
  if(resistencia <= 511 && resistencia >= 256)
  {
    led1.off();
    led2.off();
    led3.on();
    led4.off();
  }
  if(resistencia <= 255 && resistencia >= 0)
  {
    led1.off();
    led2.off();
    led3.off();
    led4.on();
  }
  setTimeout(repetir, 1000);
}
