import React, { useState, createContext } from 'react'
import { Alert } from 'react-native'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getAuth, signOut as signOutFirebase } from 'firebase/auth'
import { setAuthState, signOut } from '../features/auth/auth'
import { validateEmail, validatePassword } from '../utils/validation'

import { useDispatch } from 'react-redux'


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const dispatch = useDispatch()

    const onLogin = () => {
        const errorEmail = validateEmail(email)
        const errorPassword = validatePassword(password)
        if (errorEmail || errorPassword) {
            Alert.alert(errorEmail, errorPassword)
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(user => {
                    alert('signed in success', user)
                    dispatch(setAuthState('signedIn'))
                })
                .catch(err => Alert.alert('Login Error', err.message))
        }
    }
    const onSignUp = () => {
        const errorEmail = validateEmail(email)
        const errorPassword = validatePassword(password)
        if (errorEmail || errorPassword || password !== passwordRepeat) {
            Alert.alert(errorEmail, errorPassword)
        } else {
            createUserWithEmailAndPassword(auth, email, password, passwordRepeat)
                .then(user => {
                    alert('create in success', user)
                    dispatch(setAuthState('signedIn'))
                })
                .catch(err => Alert.alert('create Error', err.message))
        }
    }
    const logout = async () => {
        const auth = getAuth()
        await signOutFirebase(auth)
            .catch(e => alert(e))
        dispatch(signOut())
    }



    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                passwordRepeat,
                setPasswordRepeat,
                onLogin,
                onSignUp,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider