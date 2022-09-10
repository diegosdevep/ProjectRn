import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../../features/auth/auth'
import Button from '../buttons/Button'
import ButtonRedes from '../buttons/ButtonRedes'
import Input from '../Input'
import { styles } from './Auth.styles'



const uri = 'https://i.pinimg.com/736x/d7/de/85/d7de851997cb86aea701a2013df48729.jpg'

const Register = ({ onSignUp, setEmail, setPassword, setPasswordRepeat }) => {
    const dispatch = useDispatch()


    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
                <SafeAreaView style={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>Sign Up with Us!</Text>
                            <Text style={styles.body}>Join and access all the content!</Text>

                            <Input
                                onChangeText={setEmail}
                                placeholder='Email'
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                            <Input
                                onChangeText={setPassword}
                                placeholder='Enter password'
                                autoCorrect={false}
                                secureTextEntry={true}
                            />
                            <Input
                                onChangeText={setPasswordRepeat}
                                placeholder='Repeat password'
                                autoCorrect={false}
                                secureTextEntry={true}
                            />

                            <Button
                                onPress={onSignUp}
                                text='Create my account'
                                color='#FFF'
                                backgroundColor='#FD6D6A'
                            />

                            <TouchableOpacity onPress={() => dispatch(setAuthState('signIn'))}>
                                <Text style={[styles.btnText, { textAlign: 'center', fontWeight: '400', fontSize: 15 }]}>Already have an account?<Text style={{ color: '#355147', fontWeight: 'bold' }}> Sign In</Text></Text>
                            </TouchableOpacity>


                            <View style={styles.btnContainer}>
                                <ButtonRedes img={{ uri: 'https://www.cast.mx/Google/GSuite/imagenes/G-Suite-By-Google-Cloud-Logo-CASTelecom.png' }} />
                                <ButtonRedes img={{ uri: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png' }} />
                                <ButtonRedes img={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png' }} />
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    )
}

export default Register

