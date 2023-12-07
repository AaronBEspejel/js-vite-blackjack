


export const crearCarta = (carta, turno, divCartasJugadores) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('cartacss');
    divCartasJugadores[ turno ].append( imgCarta );
  
  }