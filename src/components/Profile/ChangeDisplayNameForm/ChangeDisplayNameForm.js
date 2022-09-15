import React from "react";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/colors";
import Input from "../../Input";
import { useState } from "react";


export function ChangeDisplayNameForm(props) {
    const { onClose, onReload } = props;
    const [nombre, setNombre] = useState('')




    return (
        <View style={styles.container}>
            <Input
                value={nombre}
                onChangeText={(text) => setNombre(text)}
                style={{ width: '80%' }}
                placeholder="Nombre y apellidos"
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#c2c2c2",
                }}
            />


            <TouchableOpacity onPress={onReload} style={styles.btn}>
                <Text style={styles.textBtn}>Cambiar nombre y apellidos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    btn: {
        backgroundColor: Colors.secondary,
        width: '80%',
        padding: 16,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    textBtn: {
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: Colors.light
    },
});