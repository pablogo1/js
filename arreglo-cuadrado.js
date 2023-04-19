/**
 * Regresa un nuevo arreglo con los elementos del arreglo arr original elevados al cuadrado
 * @param {Array} arr arreglo original
 * returns {Array} nuevo arreglo con los elementos del arreglo original elevados al cuadrado
 */
function arregloCuadrado(arr) {
    let arreglo = []
    for (let i = 0; i < arr.length; i++) {
        // if (arr[i])
        arreglo.push(arr[i] * arr[i]);
    }
    return arreglo
}

module.exports = arregloCuadrado;