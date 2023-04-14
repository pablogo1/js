const aprobados = require('./aprobados');

describe('aprobados', () => {
    const calificacionAprobatoria = 70;

    it ('debe de regresar 1 para un arreglo con calificacion aprobatoria', () => {
        expect(aprobados([70], calificacionAprobatoria)).toBe(1);
    });
});