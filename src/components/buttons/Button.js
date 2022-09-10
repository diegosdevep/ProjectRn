import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Button = ({ text, onPress, color, backgroundColor }) => {
    return (
        <TouchableOpacity style={[styles.signInBtn, backgroundColor = { backgroundColor }]} onPress={onPress}>
            <Text style={[{ fontWeight: 'bold', fontSize: 17 }, color = { color }]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    signInBtn: {
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginVertical: 15,
        shadowColor: '#FD6D6A',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 15
    }
})

export default Button