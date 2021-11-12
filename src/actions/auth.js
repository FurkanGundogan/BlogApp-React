import {firebase,googleAuthProvider} from '../firebase/firebaseConfig';

export const login = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
}

export const loginAction = (uid,displayName) =>({
    type:'LOGIN',
    uid,
    displayName
})

export const logout = () => {
    return firebase.auth().signOut();
}

export const logoutAction=()=>({
    type:'LOGOUT'
})