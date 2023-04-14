const cuentaCeros = require('./cuenta-ceros')

describe('funcion cuentaCeros', () => {
    it('debe regresar 0 para un arreglo vacio', () => {
        expect(cuentaCeros([])).toBe(0);
    });

    it ('debe de regresar 3 para un arreglo con tres ceros', () => {
        expect(cuentaCeros([0,0,0])).toBe(3);
    })

    it ( 'debe regresar 0 para un arreglo de tres unos', () => {
        expect(cuentaCeros([1,1,1])).toBe(0);
    })

    it ('debe de regresar 1 para un arreglo con dos 1 y 1 cero', () => {
        expect(cuentaCeros([1,0,1])).toBe(1);
    });
});