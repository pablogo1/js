const cuentaLetras = require('./cuenta-letras');

describe('cuentaLetras', () => {
    it ('debe regresar un objeto vacio para un texto vacio', () => {
        const texto = '';
        const resultadoEsperado = {};

        const resultadoObtenido = cuentaLetras(texto);

        expect(resultadoObtenido).toStrictEqual(resultadoEsperado);
    });
    
    it ('debe regresar un objecto con la cuenta de veces que una letra aparece en el texto', () => {
        const texto = 'training';
        const resultadoEsperado = {
            't': 1,
            'r': 1,
            'a': 1,
            'i': 2,
            'n': 2,
            'g': 1
        };
        
        const resultadoObtenido = cuentaLetras(texto);
        
        expect(resultadoObtenido).toStrictEqual(resultadoEsperado);
    });

    it ('debe regresar un objeto con la cuenta sin contar espacios', () => {
        const texto = 'esta vez';
        const resultadoEsperado = {
            'e': 2,
            's': 1,
            't': 1,
            'a': 1,
            'v': 1,
            'z': 1
        };

        const resultadoObtenido = cuentaLetras(texto);

        expect(resultadoObtenido).toStrictEqual(resultadoEsperado);
    });
});