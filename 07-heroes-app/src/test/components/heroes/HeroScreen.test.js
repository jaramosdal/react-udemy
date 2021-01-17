import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import { HeroScreen } from '../../../components/heroes/HeroScreen';

describe('Pruebas en <HeroScreen />', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }

    test('debe mostrar el componente Redirect si no hay argumentos en la URL', () => {
        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero']}>
                    <HeroScreen history={ history } />
                </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    
    test('Debe mostrar un hero si el parámetro existe y se encuentra', () => {
        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Route path="/hero/:heroeId" component={ HeroScreen } />
                </MemoryRouter>
        );

        expect(wrapper.find('.row').exists()).toBe(true);
    })

    test('Debe regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        
        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Route 
                        path="/hero/:heroeId" 
                        component={ () => <HeroScreen history={ history } /> } 
                    />
                </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    })
    
    test('Debe regresar a la pantalla anterior GOBACK', () => {
        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Route 
                        path="/hero/:heroeId" 
                        component={ () => <HeroScreen history={ history } /> } 
                    />
                </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();

        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalled();
    })

    test('Debe llamar al redirect si el hero no existe', () => {
        const wrapper = mount(
                <MemoryRouter initialEntries={['/hero/marvel-spider234234']}>
                    <Route 
                        path="/hero/:heroeId" 
                        component={ () => <HeroScreen history={ history } /> } 
                    />
                </MemoryRouter>
        );

        expect(wrapper.text()).toBe('');
    })
})
