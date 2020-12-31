import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

// history es una propiedad que me provee de manera automática el Router
export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        // history.push('/');
        
        const action = {
            type: types.login,
            payload: {
                name: 'Javi'
            }
        }
        dispatch(action);
        
        history.replace('/');
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button className="btn btn-primary" onClick={ handleLogin }>
                Login
            </button>
        </div>

    )
}
