const arregloCuadrado = require('./arreglo-cuadrado');

describe('arregloCuadrado', () => {
    it ('debe de regresar [4, 16, 100] para el arreglo [2, 4, 10]', () => {
        expect(arregloCuadrado([2, 4, 10])).toBe([4, 16, 100]);
    });
});