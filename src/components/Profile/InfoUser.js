import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { getAuth, updateProfile } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import * as ImagePicker from 'expo-image-picker'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Loading from '../Loading'
import { Colors } from '../../utils/colors'


const photoAvatar = 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGF2YXRhcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

const InfoUser = () => {
    const currentUser = getAuth().currentUser
    const { uid, displayName, email } = getAuth().currentUser
    const [isLoading, setIsLoading] = useState(false)
    const [avatar, setAvatar] = useState(currentUser.photoURL)


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

    if (isLoading) return <Loading title='Actualizando Avatar...' />

    return (
        <View style={styles.containerAvatar}>
            <Image
                style={styles.avatar}
                source={avatar ? { uri: avatar } : { uri: photoAvatar }}
            />
            <MaterialCommunityIcons onPress={changeAvatar} name="pencil-circle" size={32} color={Colors.secondary} style={{ top: -25, left: 35 }} />

            <Text style={styles.name}>{displayName || 'Anonimo'}</Text>
            <Text>{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerAvatar: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    avatar: {
        borderRadius: 50,
        width: 80,
        height: 80,
        marginTop: 15
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
export default InfoUser