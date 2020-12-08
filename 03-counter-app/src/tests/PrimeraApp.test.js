import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';


import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
    //     const saludo = "Hola, Soy Goku";
    //     const { getByText } = render(<PrimeraApp saludo={ saludo } />)
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    
    test('debemos mostrar <PrimeraApp />> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect(wrapper).toMatchSnapshot();
    })

    test('debemos mostrar el subtítulo enviado por props', () => {
        const saludo = 'Hola, Soy Goku';
        const subtitulo = 'Soy un subtítulo';
       
        const wrapper = shallow(
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={ subtitulo } />
        );

        const textoParrafo = wrapper.find('p').text();
        
        expect(textoParrafo).toBe(subtitulo);
    })
    
})
