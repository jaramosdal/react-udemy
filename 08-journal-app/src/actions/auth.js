import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { noteLogout } from './notes';
import { finishLoading, startLoading } from "./ui";

// Middlewares Login / Register
export const startLoginEmailPassword = (email, password) => {
    // este dispatch nos lo ofrece Thunk
    return (dispatch) => {
        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
                
                dispatch(finishLoading());
            })
            .catch( e => {
                dispatch(finishLoading())
                Swal.fire('Error', e.message, 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) => {
                await user.updateProfile({displayName: name});

                dispatch(login(user.uid, user.displayName));
            })
            .catch(({message}) => {
                Swal.fire('Error', message, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName));
            });
    }
}

// Actions Login / Register
export const login = (uid, displayName) => ({
    type: types.login,
    payload: { 
        uid, 
        displayName 
    }
});



// Middlewares Logout
export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();

        dispatch(logout());
        dispatch(noteLogout());
    }
}

// Actions Logout
export const logout = () => ({
    type: types.logout
});