import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { expenseAvatar, ip, testUsers } from '../config';
import UserComponent from '../components/UserComponent';
import axios from 'axios';

export default AddExpense = ({ navigation }) => {
    const [selectedExpenseAvatar, setSelectedExpenseAvatar] = useState(1)
    const [groupInviteId, setGroupInviteId] = useState('60dc7');
    const [members, setMembers] = useState([]);
    const [memberDetails, setMemberDetails] = useState([]);
    const [groupId, setGroupId] = useState('');
    const [billName, setBillName] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [billAvatar, setBillAvatar] = useState(1);

    useEffect(() => {
        const getGroupDetails = async () => {
            try {
                const group = await axios.get(`http://${ip}/api/v1/group/${groupInviteId}`)
                setGroupId(group.data.id)
                setMembers(group.data.members)
            } catch (error) {
                console.log(error)
                navigation.navigate('Home')
                return
            }
        }

        const getGroupUsers = async () => {
            try {
                if (!members) {
                    console.log('no members')
                    alert('No members in group! ERROR')
                    navigation.navigate('Home');
                    return
                }

                const getUserEndPoint = `http://${ip}/api/v1/user`
                const userObjects = []

                for (const userId of members) {
                    try {
                        const response = await axios.get(`${getUserEndPoint}/${userId}`)
                        userObjects.push(response.data)
                    } catch (error) {
                        console.error(`Failed to fetch user data for user ID: ${userId}`)
                    }
                }

                setMemberDetails(userObjects)
            } catch (error) {
                console.log(error)
                navigation.navigate('Home')
            }
        }

        getGroupDetails()
        getGroupUsers()
    }, [])

    const moveToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={{ marginTop: 30 }}>
            {/* Top Bar */}
            <View style={styles.topBarContainer}>
                {/* Back Button */}
                <TouchableOpacity style={[styles.topBarItem]} onPress={moveToHome}>
                    <View>
                        <Text style={{ fontSize: 18 }}>{'<'}</Text>
                    </View>
                </TouchableOpacity>

                {/* Screen Title */}
                <View style={[styles.topBarItem, { flex: 1 }]}>
                    <Text style={{ fontSize: 18 }}>create bill split</Text>
                </View>
            </View>

            <View style={styles.center}>
                {/* Select billname*/}
                <InputBox
                    inputTitle={'Bill Name*'}
                    placeholderName={'enter bill name here'}
                    value={billName}
                    setValue={setBillName}
                />

                {/* Select bill amount*/}
                <InputBox
                    inputTitle={'Bill Amount*'}
                    placeholderName={'enter bill amount here'}
                    value={billAmount}
                    setValue={setBillAmount}
                />

                {/* Select bill type */}
                <Text style={styles.fieldTitle}>Bill Type</Text>
                <View style={styles.billTypeWrap}>
                    {expenseAvatar.map((avatar, index) => (
                        <TouchableOpacity key={index} onPress={() => {
                            setBillAvatar(index)
                        }}>
                            <Image
                                source={avatar.src}
                                style={[styles.billType, index === billAvatar && styles.selectedExpense,]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <View>
                    <InputBox inputTitle={'Who Paid?*'} />
                </View>

                {/* Select users */}
                <View style={styles.selectUsers}>
                    <Text style={styles.fieldTitle}>Select Members</Text>
                    <UserComponent users={memberDetails} />
                </View>

                {/* Confirm Button */}
                <View style={{ marginTop: '4%' }}>
                    <Button buttonText={'save'} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    topBarContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    topBarItem: {
        width: '30%',
        height: 50,
        marginLeft: 8,
        marginTop: 8,
        padding: 5,
        justifyContent: 'center',
    },
    center: {
        marginLeft: '9%',
        marginTop: '10%',
        justifyContent: 'center',
    },
    titleWrap: {
        marginTop: '2%',
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
        height: 52,
        width: 52,
        marginRight: '4%',
    },
    selectUsers: {
        height: 250,
        width: '90%',
        marginBottom: '2%',
        backgroundColor: '#ECECEC',
        borderRadius: 20,
        paddingTop: '3%',
        paddingLeft: '1%',
    },
    selectedExpense: {
        borderWidth: 4,
        borderColor: '#000000',
        opacity: 0.8,
    },
});
