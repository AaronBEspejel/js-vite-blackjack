

export const determinarGanador = ( puntosJugadores = [] ) => {

    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
  
    setTimeout(() => {        
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana');
        } else if ( puntosMinimos > 21 ){
            alert('Te he ganado');
        } else if (puntosComputadora > 21 ){
            alert('He perdido y tú haz ganado')
        } else if ( puntosMinimos > puntosComputadora && puntosMinimos < 21 ){
            alert('Por esta vez me has ganado')
        } else {
                alert('computadora Gana');
        }
    }, 150 );
  
  }