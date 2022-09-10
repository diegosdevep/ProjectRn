import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { signOut, onSignOut } from '../features/auth/auth'
import { auth } from '../firebase/firebase'
import { signOut as signOutFirebase } from 'firebase/auth'


const ProfileScreen = () => {

    const dispatch = useDispatch()

    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button
                onPress={async () => {
                    signOutFirebase(auth).catch(e => alert(e))
                    dispatch(signOut())
                }}
                title='Sign Out'
            />
        </View>
    )
}

export default ProfileScreen


// const dispatch = useDispatch()

    // const onSignOut = () => {
    //     dispatch(signOut())
    //     auth.signOut()
    //     // signOut(auth).catch(err => console.log(err))
    // }