import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    test('debemos mostrar <AddCategory /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', { 
            target: {
                value
            }
         });
    });
});