const aprobados = require('./aprobados');

describe('aprobados', () => {
    const calificacionAprobatoria = 70;

    it ('debe de regresar 1 para un arreglo con calificacion aprobatoria', () => {
        expect(aprobados([70], calificacionAprobatoria)).toBe(1);
    });

    it ('debe regresar 0 para un arreglo sin calificaciones aprobatorias', () => {
        expect(aprobados([54, 65, 69, 20], calificacionAprobatoria)).toBe(0);
    });

    it ('debe regresar el numero de calificaciones aprobatorias en el arreglo', () => {
        expect(aprobados([20, 70, 69, 80, 69], calificacionAprobatoria)).toBe(2);
    })
});