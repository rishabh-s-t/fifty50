import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal'
import InputBox from '../components/forms/InputBox'
import Button from '../components/Button'
import UserComponent from '../components/UserComponent'

export default AddBill = ({
    billModalProp = false,
}) => {
    const [billModal, setBillModal] = useState(billModalProp)
    const [billName, setBillName] = useState('')
    const [billAmount, setBillAmount] = useState('')

    // Use Effect to make changes upon changing of the props value
    useEffect(() => {
        setBillModal(billModalProp)
    }, [{billModalProp}])

    return (
        // <CreateGroup />
        <View style={styles.container}>

            <Modal
                isVisible={billModal}
                onBackdropPress={() => setBillModal(false)}
                style={styles.billSplitModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.titleWrap}>
                        <Text style={{ fontSize: 16 }}>create bill split</Text>
                    </View>

                    <View style={styles.center}>
                        {/* Select billname*/}
                        <InputBox
                            inputTitle={'Bill Name*'}
                            placeholderName={'enter bill name here'}
                            value={billName}
                            setValue={setBillName} />

                        {/* Select bill amount*/}
                        <InputBox
                            inputTitle={'Bill Amount*'}
                            placeholderName={'enter bill amount here'}
                            value={billAmount}
                            setValue={setBillAmount} />

                        {/* Select bill type */}
                        <Text style={styles.fieldTitle}>Bill Type</Text>
                        <View style={styles.billTypeWrap}>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/bills/default.png')}
                                    style={styles.billType} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/bills/bill.png')}
                                    style={styles.billType} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/bills/food.png')}
                                    style={styles.billType} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/bills/rent.png')}
                                    style={styles.billType} />
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image
                                    source={require('../../assets/icons/bills/travel.png')}
                                    style={styles.billType} />
                            </TouchableOpacity>

                        </View>

                        {/* Select users */}
                        <View style={{ height: '35%', width: '90%', }}>
                            <Text style={styles.fieldTitle}>Select Members</Text>
                            <ScrollView>
                                {/* User Component */}
                                <UserComponent
                                    username={'Rishabh Singh Tomar'}
                                    userPhoneNumber={'+91-6266505214'}
                                    avatarID={0} />

                                <UserComponent
                                    username={'Vaidika Ranka'}
                                    userPhoneNumber={'+91-8209082030'}
                                    avatarID={1} />

                                <UserComponent
                                    username={'Sarthak Waliwadekar'}
                                    userPhoneNumber={'+91-6266505214'}
                                    avatarID={2} />

                                <UserComponent
                                    username={'Tanishka Singh'}
                                    userPhoneNumber={'+91-6266505214'}
                                    avatarID={3} />

                                <UserComponent
                                    username={'Om Patel'}
                                    userPhoneNumber={'+91-6266505214'}
                                    avatarID={4} />
                            </ScrollView>
                        </View>

                        {/* Confirm Button */}
                        <Button buttonText={'save'} />
                    </View>
                </View>
            </Modal >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        height: '90%',
    },
    center: {
        marginLeft: '9%',
        marginTop: '10%',
        justifyContent: 'center',
    },
    titleWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    billSplitModal: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: '10%',
    },
    fieldTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 10,
    },
    memberScrollView: {
        height: '50%',
    },
    billTypeWrap: {
        flexDirection: 'row',
        marginBottom: '5%',
    },
    billType: {
        borderRadius: 20,
        height: 47,
        width: 47,
        marginRight: '4%',
    },
})