import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../utils/colors'
import InfoUser from '../components/Profile/InfoUser'
import AccountOptions from '../components/Profile/AccountOptions'
import { AuthContext } from '../context/AuthContext'


const ProfileScreen = () => {
    const { logout } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <InfoUser />

            <AccountOptions />

            <View style={styles.containerAvatar}>
                <TouchableOpacity onPress={logout} style={styles.btn}>
                    <Text style={styles.textBtn}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFF'
    },
    containerAvatar: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    btn: {
        backgroundColor: Colors.primary,
        width: '80%',
        padding: 16,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 50,
    },
    textBtn: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Colors.light
    },
    input: {
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#f7f7f7',
        marginBottom: 10,
        marginHorizontal: 40,
    }
})

export default ProfileScreen



// const dispatch = useDispatch()

    // const onSignOut = () => {
    //     dispatch(signOut())
    //     auth.signOut()
    //     // signOut(auth).catch(err => console.log(err))
    // }