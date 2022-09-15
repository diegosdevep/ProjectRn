import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../../utils/colors";
import Input from "../../Input";
import { getAuth, updateEmail } from "firebase/auth";

export function ChangeEmailForm(props) {
    const { onClose, onReload } = props;
    const [showPassword, setShowPassword] = useState(false);

    const onShowPassword = () => setShowPassword((prevState) => !prevState);
    const auth = getAuth()




    return (
        <View style={styles.container}>
            <Input
                placeholder="Nuevo email"
            />
            <Input
                placeholder="Contraseña"
                secureTextEntry={showPassword ? false : true}
                rightIcon={{
                    type: "material-community",
                    name: showPassword ? "eye-off-outline" : "eye-outline",
                    color: "#c2c2c2",
                    onPress: onShowPassword,
                }}
            />
            <View style={{}}>
                <TouchableOpacity onPress={onReload} style={styles.btn}>
                    <Text style={styles.textBtn}>Cambiar Email</Text>
                </TouchableOpacity>
            </View>
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
        minWidth: '80%',
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
    }
})