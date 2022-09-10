import React from 'react'
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setAuthState } from '../../features/auth/auth'


const uri = 'https://i.pinimg.com/736x/d7/de/85/d7de851997cb86aea701a2013df48729.jpg'

const Welcome = () => {

    const { height } = Dimensions.get('window')
    const dispatch = useDispatch()


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/originals/58/07/84/580784bf82583e8060971b3baafd98f4.png' }}
                        style={{
                            width: '80%',
                            height: (height / 3) * 1.5,
                            borderRadius: 16,
                            marginBottom: 30,
                        }}
                    />
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>Share your </Text>
                        <Text style={styles.title}>best resources</Text>
                        <Text style={styles.body}>Accelerate the creation of your app by searching here for your best resources</Text>

                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                style={styles.btn1}
                                onPress={() => dispatch(setAuthState('signUp'))}
                            >
                                <Text style={styles.btnText}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.btn2}
                                onPress={() => dispatch(setAuthState('signIn'))}
                            >
                                <Text style={styles.btnText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    contentContainer: {
        paddingHorizontal: 30,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    title: {
        color: '#355147',
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        lineHeight: 35,
    },
    body: {
        paddingTop: 20,
        fontSize: 17,
        lineHeight: 23,
        fontWeight: '400',
        textAlign: 'center',
        color: '#355147'
    },
    btnText: {
        fontWeight: '500',
        color: '#355147',
        fontSize: 18
    },
    btn1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff70',
        padding: 16,
        borderRadius: 6,
    },
    btn2: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 16,
        backgroundColor: '#dfe3e630',
        marginTop: 40,
    }
})