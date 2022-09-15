import React, { useContext } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthContext } from '../../context/AuthContext'
import { setAuthState } from '../../features/auth/auth'
import Button from '../buttons/Button'
import ButtonRedes from '../buttons/ButtonRedes'
import Input from '../Input'
import { styles } from './Auth.styles'


const uri = 'https://i.pinimg.com/736x/d7/de/85/d7de851997cb86aea701a2013df48729.jpg'

const SignIn = () => {
    const dispatch = useDispatch()
    const { email, setEmail, password, setPassword, onLogin } = useContext(AuthContext)


    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', width: "100%" }}>
                <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
                <SafeAreaView style={styles.container}>
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.contentContainer}>
                            <Text style={styles.title}>Hello Again!</Text>
                            <Text style={styles.body}>Welcome back you've been missed!</Text>

                            <Input
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                placeholder='Email'
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                            <Input
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                placeholder='Enter password'
                                autoCorrect={false}
                                secureTextEntry={true}
                            />

                            <TouchableOpacity>
                                <Text style={[styles.btnText, { fontSize: 15, lineHeight: 30, textAlign: 'right' }]}>Recovery Password</Text>
                            </TouchableOpacity>

                            <Button onPress={onLogin} text='Sign In' color='#FFF' backgroundColor='#FD6D6A' />
                            <Button onPress={() => dispatch(setAuthState('signUp'))} text='Register' color='#000' backgroundColor='#FD6D6A' />

                            <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 15 }}>Or continue with</Text>

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

export default SignIn