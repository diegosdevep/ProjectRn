import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'

const Modals = ({ visible, children, onPress }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            onPress={onPress}
            visible={visible}
        >
            <View style={styles.modal}>
                <View style={styles.box}>
                    {children}
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'white',
        height: '50%',
        width: '85%',
        borderRadius: 10,
    }
})

export default Modals