/**
 * Tarea
 * 
 * 1. Crear las siguientes pruebas para el <CounterApp />
 *      * debe mostrar <CounterApp /> correctamente (hacer match con un snapshot)
 *          Y sus valores por defecto
 * 
 *      * debe mostrar el valor por defecto de 100
 *          * usar el wrapper.find, tomando el elemento html donde se muestra el valor del contador
 */

import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
    test('debemos mostrar <CounterApp />> correctamente', () => {
        const wrapper = shallow(<CounterApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;

        const wrapper = shallow(
            <CounterApp value={ value } />
        );

        const valor = wrapper.find('h2').text().trim();
        
        expect(valor).toBe('100');
    });
})