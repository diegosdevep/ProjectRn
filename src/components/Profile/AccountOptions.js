import { View, Text } from 'react-native'
import React from 'react'
import Modals from '../Modals'
import InputInfoUser from './InputInfoUser';
import { ChangeDisplayNameForm } from './ChangeDisplayNameForm/ChangeDisplayNameForm';
import { useState } from 'react';
import { ChangeEmailForm } from './ChangeEmailForm/ChangeEmailForm';
import { ChangePasswordForm } from './ChangePasswordForm/ChangePasswordForm';

const AccountOptions = () => {
    const [showModal, setShowModal] = useState(false);
    const [renderComponent, setRenderComponent] = useState(null);
    const onCloseOpenModal = () => setShowModal((prevState) => !prevState);
    const onReload = () => setShowModal((prevState) => !prevState);

    const selectedComponent = (key) => {
        if (key === "displayName") {
            setRenderComponent(<ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />)
        }
        if (key === "email") {
            setRenderComponent(<ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />)
        }
        if (key === "password") { setRenderComponent(<ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload} />) }

        onCloseOpenModal();
    };

    return (
        <View>
            <View style={{ marginTop: 50 }}>
                <InputInfoUser onPress={() => selectedComponent('displayName')} text='Change name and lastname' icon={"account-circle"} />
                <InputInfoUser onPress={() => selectedComponent('email')} text='Change email' icon={"at"} />
                <InputInfoUser onPress={() => selectedComponent('password')} text='Change password' icon={"lock"} />
            </View>

            <Modals visible={showModal} onPress={onCloseOpenModal}>
                {renderComponent}
            </Modals>
        </View>
    )
}

export default AccountOptions