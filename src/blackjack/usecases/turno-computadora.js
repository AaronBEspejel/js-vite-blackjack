import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from './';

/**
 * Turno de la computadora 
 * @param {Number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {Number} puntosMinimos puntos mínimos   
 */

export const turnoComputadora = ( puntosMinimos, puntosHtml, deck = [], puntosJugadores = [], divCartasJugadores) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    

    let puntosComputadora = 0;
    
  
     do{
        const carta = pedirCarta( deck );
        puntosComputadora = acumularPuntos(carta, 1, puntosHtml, puntosJugadores);
        crearCarta( carta, puntosJugadores.length - 1, divCartasJugadores );
  
     } while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );
  
     determinarGanador(puntosJugadores);
  }