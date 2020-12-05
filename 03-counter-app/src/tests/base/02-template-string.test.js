import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Javi', () => {
        const nombre = 'Javi';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    });

    test('getSaludo debe de retornar Hola Carlos si no hay argumento en nombre', () => {
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos');
    });
});