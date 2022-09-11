import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Register from '../components/Auth/Register'
import SignIn from '../components/Auth/SignIn'
import Welcome from '../components/Auth/Welcome'
import { setAuthState } from '../features/auth/auth'
import { auth } from '../firebase/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { Alert } from 'react-native'
import { validateEmail, validatePassword } from '../utils/validation'


const AuthScreen = () => {
    const dispatch = useDispatch()
    const { authState } = useSelector(state => state.auth)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

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


    return (
        <>
            {authState === 'signIn' && (
                <SignIn
                    onLogin={onLogin}
                    setEmail={setEmail}
                    setPassword={setPassword}
                />
            )}
            {authState === 'signUp' && (
                <Register
                    onSignUp={onSignUp}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setPasswordRepeat={setPasswordRepeat}
                />
            )}
            {authState === 'signOut' && (<Welcome />)}
        </>
    )
}

export default AuthScreen