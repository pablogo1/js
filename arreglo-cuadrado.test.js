const arregloCuadrado = require('./arreglo-cuadrado');

describe('arregloCuadrado', () => {
    it ('debe regresar arreglo vacio [] para un arreglo vacio []', () => {
        expect(arregloCuadrado([])).toStrictEqual([]);
    });

    it ('debe de regresar [4, 16, 100] para el arreglo [2, 4, 10]', () => {
        expect(arregloCuadrado([2, 4, 10])).toStrictEqual([4, 16, 100]);
    });
});