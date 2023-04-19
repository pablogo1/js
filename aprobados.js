
/**
 * Regresa el número de calificaciones aprobatorias encontradas en el arreglo arr.
 * Se espera que se indique la calificación mínima aprobatoria:
 * aprobado = calificacion >= calificacionAprobatoria
 * @param {Array} arr 
 * @param {number} calificacionAprobatoria 
 */
function aprobados(arr, calificacionAprobatoria) {
    let cuenta = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] >= calificacionAprobatoria ) {
            cuenta = cuenta + 1
        }
    }
    return cuenta;
}

module.exports = aprobados;