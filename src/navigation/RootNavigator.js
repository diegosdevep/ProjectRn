import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import BottomTabs from './BottomTabs';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { restoreToken } from '../features/auth/auth';



const RootNavigator = () => {
    const { userToken } = useSelector(state => state.auth)
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, async user => {
            if (user) {
                dispatch(restoreToken(user.email))
            } else {
                console.log('user is no authenticated')
            }
            setIsLoading(false)
        })
        return unsubscribeAuth
    }, [])


    if (isLoading) return <Loading />
    return <NavigationContainer>
        {userToken ? <BottomTabs /> : <AuthStack />}
    </NavigationContainer>;
}

export default RootNavigator