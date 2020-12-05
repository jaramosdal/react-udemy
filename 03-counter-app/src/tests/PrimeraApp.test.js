import React from 'react';
import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
    test('Debe mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = "Hola, Soy Goku";

        // const wrapper = render(<PrimeraApp saludo={ saludo } />)

        // wrapper.getByText();

        const { getByText } = render(<PrimeraApp saludo={ saludo } />)

        expect(getByText(saludo)).toBeInTheDocument();
    })
    
})
