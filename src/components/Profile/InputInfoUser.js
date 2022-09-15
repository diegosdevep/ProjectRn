import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../utils/colors';

const InputInfoUser = ({ text, icon, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={[styles.row, styles.padding]}>
            <View style={styles.row}>
                <MaterialCommunityIcons size={26} color={Colors.secondary} name={icon} style={{ marginRight: 10 }} />
                <Text style={styles.label}>{text}</Text>
            </View>
            <View >
                <Ionicons color={Colors.secondary} name='chevron-forward-outline' size={22} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        marginVertical: 14,
        borderRadius: 5
    },
    padding: {
        marginHorizontal: 40,
    },
    label: {
        fontSize: 16,
        color: Colors.dark,
        fontWeight: '500'
    }
})
export default InputInfoUser