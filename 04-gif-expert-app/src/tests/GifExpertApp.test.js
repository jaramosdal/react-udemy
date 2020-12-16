import React from 'react'
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {

    test('debemos mostrar <GifExpertApp /> correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debemos mostrar una lista de categorías', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});