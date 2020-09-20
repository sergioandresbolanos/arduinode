/* eslint-disable indent */
const jf = require('johnny-five');

const circuito = new jf.Board();

function prender() {
    const blanquito = new jf.Led(13);
    blanquito.blink(500);
    const amarillo = new jf.Led(8);
    amarillo.blink(1200);
    console.log('Hola mamá se hacer hardware');
}
 
circuito.on('ready', prender);
