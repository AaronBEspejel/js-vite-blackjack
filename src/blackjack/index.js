import _ from 'underscore';
// import { crearDeck } from './usecases/crear-deck';
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta } from './usecases'

const miModulo = (() => {
  'use strict'

let deck         = [];
const tipos      = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

//referencias del HTML
const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo');


const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHtml         = document.querySelectorAll('small');


const inicializarJuego = ( numJugadores = 2 ) => {
  deck = crearDeck( tipos, especiales );

  puntosJugadores = [];
  for( let i = 0; i < numJugadores; i++ ){
      puntosJugadores.push(0);
  }

  puntosHtml.forEach( elem => elem.innerText = 0 );
  divCartasJugadores.forEach( elem => elem.innerHTML = '' );

  btnPedir.disabled   = false;
  btnDetener.disabled = false;

}


//Eventos
let puntosJugador
btnPedir.addEventListener('click', () => {

  const carta = pedirCarta( deck );
        
  puntosJugador = acumularPuntos ( carta, 0, puntosHtml, puntosJugadores );

  crearCarta( carta, 0, divCartasJugadores );

  
  if( puntosJugador > 21 ){
      console.warn('Lo siento, haz perdido');
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador, puntosHtml, deck, puntosJugadores, divCartasJugadores );
  } else if ( puntosJugador === 21 ){
      console.warn('¡21, Felicidades. Haz ganado!');
      btnPedir.disabled   = true;
      btnDetener.disabled = true;
      turnoComputadora( puntosJugador, puntosHtml, deck, puntosJugadores, divCartasJugadores );
  }


});

btnDetener.addEventListener('click', () => {

  btnPedir.disabled   = true;
  btnDetener.disabled = true;
  btnNuevo.disabled = false;
  turnoComputadora( puntosJugador, puntosHtml, deck, puntosJugadores, divCartasJugadores );

});

btnNuevo.addEventListener('click', () => {

  inicializarJuego();

});

return{

  nuevoJuego: inicializarJuego, 

}

})();

