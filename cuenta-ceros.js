function cuentaCeros(arr) {
    let cuenta = 0
    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            cuenta = cuenta + 1
        }

    }
    return cuenta
}


module.exports = cuentaCeros;