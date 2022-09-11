import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const Loading = ({ title }) => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{title}</Text>
            <ActivityIndicator size='large' />
        </View>
    )
}

export default Loading