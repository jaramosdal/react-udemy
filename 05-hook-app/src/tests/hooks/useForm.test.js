import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'javi',
        email: 'javiramos@email.com'
    }

    test('debe retornar un formulario por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ values, handleInputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('debe cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [ formValues ] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'Melissa' });
    });

    test('debe re-establecer el formulario con RESET', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();
        });

        const [ formValues ] = result.current;
        console.log(formValues);
        expect(formValues).toEqual(initialForm);
    });

});