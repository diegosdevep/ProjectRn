import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { signOut } from '../features/auth/auth'
import { getAuth, signOut as signOutFirebase, updateProfile } from 'firebase/auth'
import { Colors } from '../utils/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import Loading from '../components/Loading'
import { useEffect } from 'react'



const photoAvatar = 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGF2YXRhcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

const ProfileScreen = () => {
    const currentUser = getAuth().currentUser
    const { uid, displayName, email } = getAuth().currentUser
    const [isLoading, setIsLoading] = useState(false)
    const [avatar, setAvatar] = useState(currentUser.photoURL)


    const dispatch = useDispatch()
    const changeAvatar = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
        })
        if (!result.cancelled) uploadImage(result.uri)
    }

    const uploadImage = async (uri) => {
        setIsLoading(true)

        const response = await fetch(uri)
        const blob = await response.blob()

        const storage = getStorage()
        const storageRef = ref(storage, `avatar/${uid}`)

        uploadBytes(storageRef, blob).then((snapshot) => {
            updatePhotoUrl(snapshot.metadata.fullPath)
        })
    }

    const updatePhotoUrl = async (imagePatch) => {
        const storage = getStorage()
        const imageRef = ref(storage, imagePatch)

        const imageUrl = await getDownloadURL(imageRef)

        const auth = getAuth()
        updateProfile(auth.currentUser, { photoURL: imageUrl })

        setAvatar(imageUrl)
        setIsLoading(false)
    }

    const logout = async () => {
        const auth = getAuth()
        await signOutFirebase(auth)
            .catch(e => alert(e))
        dispatch(signOut())
    }


    if (isLoading) return <Loading title='Actualizando Avatar...' />
    return (
        <View style={styles.container}>
            <View style={styles.containerAvatar}>
                <Image
                    style={styles.avatar}
                    source={avatar ? { uri: avatar } : { uri: photoAvatar }}
                />

                <Text style={styles.name}>{displayName || 'Anonimo'}</Text>
                <Text>{email}</Text>
                <TouchableOpacity onPress={changeAvatar} style={styles.btn}>
                    <Text style={styles.textBtn}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View>
                <View style={[styles.row, styles.padding]}>
                    <View style={styles.row}>
                        <MaterialCommunityIcons name="account-circle" style={{ marginRight: 10, fontSize: 25, color: 'grey' }} />
                        <Text style={styles.label}>Name</Text>
                    </View>
                    <View >
                        <Ionicons name="chevron-forward-outline" size={18} />
                    </View>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Diego Maidana'
                    />
                </View>
            </View>


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
    },
    avatar: {
        borderRadius: 50,
        width: 80,
        height: 80,
        marginTop: 25
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: Colors.primary,
        width: '80%',
        padding: 16,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
    textBtn: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Colors.light
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    padding: {
        marginHorizontal: 40,
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