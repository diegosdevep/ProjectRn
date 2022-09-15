import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useLayoutEffect, useCallback, useEffect, useState, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { auth, db } from '../firebase/firebase'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../utils/colors'
import { AuthContext } from '../context/AuthContext'


const ChatScreen = () => {
    const [messages, setMessages] = useState([])
    const navigation = useNavigation()
    const { logout } = useContext(AuthContext)



    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={logout}
                >
                    <MaterialCommunityIcons name="location-exit" size={32} color={Colors.secondary} />
                </TouchableOpacity>
            )
        })
    }, [navigation])

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats')
        const q = query(collectionRef, orderBy('createdAt', 'desc'))

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log('snapshot')
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            )
        })
        return () => unsubscribe()
    }, [])


    const onSend = useCallback((messages = []) => {
        setMessages(prevMessages => GiftedChat.append(prevMessages, messages))
        const { _id, createdAt, text, user } = messages[0]
        addDoc(collection(db, 'chats'), {
            _id, createdAt, text, user
        })
    }, [])


    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                avatar: auth?.currentUser.photoURL
            }}
            messagesContainerStyle={{
                backgroundColor: '#fff'
            }}
            showAvatarForEveryMessage={true}
        />
    )
}

export default ChatScreen