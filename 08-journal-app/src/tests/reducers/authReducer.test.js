import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    test('Debe realizar el login', () => {
        const initState = {};

        const action = {
            type: types.login,
            payload: {
                uid: 'ABC',
                displayName: 'Fernando'
            }
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: 'ABC',
            name: 'Fernando'
        });
    })

    test('Debe realizar el logout', () => {
        const initState = {
            uid: 'asdfghj1234567',
            name: 'Javi'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer(initState, action);

        expect(state).toEqual({});
    })

    test('No debe hacer cambios en el state', () => {
        const initState = {
            uid: 'asdfghj1234567',
            name: 'Javi'
        };

        const action = {
            type: 'asfgag'
        };

        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    })
})
