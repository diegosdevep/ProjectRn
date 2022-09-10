import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'

const ButtonRedes = ({ img }) => {
    return (
        <TouchableOpacity style={styles.btn1}>
            <Image
                source={img}
                style={{ width: 40, height: 40 }}
            />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    btn1: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff70',
        padding: 16,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 16,
        marginHorizontal: 10,
    },
});
export default ButtonRedes