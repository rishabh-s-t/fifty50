import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import AsyncStorage from '@react-native-async-storage/async-storage'
import InputBox from '../components/forms/InputBox'
import axios from 'axios'
import { ip } from '../config'
import Modal from 'react-native-modal'

export default CreateGroup = () => {

    const [groupName, setGroupName] = useState('')
    const [showModal, setShowModal] = useState(false)

    //Create Group Function
    const createGroup = async () => {
        if (groupName === '') alert('enter group name')

        let data = await AsyncStorage.getItem("@auth");
        let loginData = JSON.parse(data)

        const userObj = loginData.user

        const userID = [userObj._id] //ID of currently logged in user
        const userName = userObj.userName
        console.log(userID)

        await axios.post(
            `http://${ip}/api/v1/group/createGroup`,
            {
                "groupName": groupName,
                "usersInvolved": userID,
                "owner": userName
            }
        ).then((response) => {
            alert('Couldn\'t connect with the server')
        }).catch((error) => {
            alert('Ran into an error while contacting the server')
        })

        setShowModal = false
    }

    return (
        <View style={styles.container}>
            <View style={styles.groupButtonView}>
                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                    style={styles.addGroupButton}>
                    <Text style={styles.addGroupButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={showModal}
                style={styles.modalStyle}
                onBackdropPress={() => setShowModal(false)}>
                <View style={styles.center}>
                    <InputBox
                        inputTitle={'Group Name*'}
                        placeholderName={'enter group name'}
                        value={groupName}
                        setValue={setGroupName} />
                    <Button
                        buttonText={'+ create group'}
                        handleSubmit={() => createGroup()} />
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        marginLeft: '10%',
        justifyContent: 'center',
    },
    groupButtonView: {
        marginTop: '12%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    addGroupButton: {
        height: 48,
        width: 48,
        backgroundColor: '#ECECEC',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addGroupButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    modalStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        width: '90%',
    }
})