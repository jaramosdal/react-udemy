import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en todoReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('debe agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe borrar un TODO', () => {

        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);
        expect(state).toEqual(demoTodos.filter(todo => todo.id !== 2));
    });

    test('debe cambiar done de un TODO', () => {

        const action = {
            type: 'toggle',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state[0]).toEqual(demoTodos[0]);
        expect(state[1].done).toBe(true);
    });

});