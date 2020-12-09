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

    let wrapper = shallow(<CounterApp />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('debemos mostrar <CounterApp />> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(<CounterApp value={ 100 } />);

        const valor = wrapper.find('h2').text().trim();
        
        expect(valor).toBe('100');
    });

    test('debe incrementar con el botón de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const valor = wrapper.find('h2').text().trim();
        expect(valor).toBe('11');
    });

    test('debe decrementar con el botón de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valor = wrapper.find('h2').text().trim();
        expect(valor).toBe('9');
    });

    test('debe colocar el valor por defecto con el botón reset', () => {
        const wrapper = shallow(<CounterApp value={ 105 } />);
        
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        
        const valor = wrapper.find('h2').text().trim();
        expect(valor).toBe('105');
    });
})