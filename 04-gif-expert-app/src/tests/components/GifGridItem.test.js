import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('debemos mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debemos tener un párrafo co el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debemos tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.hasClass('animate__fadeIn')).toBe(true);
    });
});