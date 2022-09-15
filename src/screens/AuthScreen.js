import React from 'react'
import { useSelector } from 'react-redux'
import Register from '../components/Auth/Register'
import SignIn from '../components/Auth/SignIn'
import Welcome from '../components/Auth/Welcome'


const AuthScreen = () => {
    const { authState } = useSelector(state => state.auth)

    return (
        <>
            {authState === 'signIn' && (
                <SignIn />
            )}
            {authState === 'signUp' && (
                <Register />
            )}
            {authState === 'signOut' && (<Welcome />)}
        </>
    )
}

export default AuthScreen