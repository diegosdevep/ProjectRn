import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Input = ({ placeholder, autoCorrect, autoCapitalize, secureTextEntry, onChangeText, value }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        minWidth: '100%',
        padding: 20,
        borderRadius: 16,
        backgroundColor: '#f7f7f7',
        marginBottom: 10,
    },
})

export default Input