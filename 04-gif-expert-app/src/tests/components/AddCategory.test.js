import React from 'react';
import { shallow } from 'enzyme';

import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

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

    test('NO debe postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe llamar al setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';
        
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } }); 

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        
        expect(input.prop('value')).toBe('');
    });
});