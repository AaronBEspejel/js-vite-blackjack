import {valorCarta} from './'

//
/**
 * turno: 0 = primer jugador y el último será la computadora 
 * @param {Number} carta 
 * @param {Number} turno
 * @param {ElementoHTMl} puntosHtml
 * @param {Array<string>} puntosJugadores 
 * @returns 
 */
export const acumularPuntos = ( carta, turno, puntosHtml, puntosJugadores = [] ) => {

    
    puntosJugadores[ turno ] = puntosJugadores[ turno ] + valorCarta ( carta );
    puntosHtml[ turno ].innerText = puntosJugadores [ turno ];
    return puntosJugadores[ turno ];
  
  }
  