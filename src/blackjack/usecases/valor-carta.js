/**
 * Obtener el valor de la carta
 * @param {String} card 
 * @returns {Number} valor de la carta
 */

export const valorCarta = ( card ) => {
  
    const valor = card.substring(0, card.length -1);
    return ( isNaN( valor ) ) ?
             ( valor === 'A' ) ? 11 : 10
            : valor * 1; 
  }