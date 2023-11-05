import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    ActivityIndicator,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { avatarArray, ip } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal'
import axios from 'axios';
import { getAuthFromLocalStorage } from '../services/getAuth';

export default ActiveGroup = ({ navigation, route }) => {
    const activeGroupId = route.params.activeGroup;
    const [showModal, setShowModal] = useState(false)
    const [groupDetails, setGroupDetails] = useState()
    const [userId, setUserId] = useState()
    const [userExpenses, setUserExpenses] = useState()

    const getAllExpensesOfUser = async () => {
        const getAllExpenseEndpoint = `http://${ip}/api/v1/expense/group/${groupDetails._id}/member/${userId}`
        console.log(getAllExpenseEndpoint)
        const expenses = await axios.get(getAllExpenseEndpoint)
        setUserExpenses(expenses.data)
    }

    const getGroupDetails = async () => {
        const getGroupEndpoint = `http://${ip}/api/v1/group/expense/${activeGroupId}`
        const groupDetailsResponse = await axios.get(getGroupEndpoint)
        setGroupDetails(groupDetailsResponse.data)
    }

    const getUserId = async () => {
        let user = await getAuthFromLocalStorage();
        user = JSON.parse(user);
        setUserId(user.user._id); // Make sure user._id exists in the data you retrieve
    };

    const moveToAddExpense = () => {
        navigation.navigate('AddExpense', { groupDetails })
    }

    useEffect(() => {
        getGroupDetails();
    }, []);

    useEffect(() => {
        if (groupDetails) {
            getUserId();
        }
    }, [groupDetails]);

    useEffect(() => {
        getAllExpensesOfUser()
    }, [userId])

    useEffect(() => {
        console.log(JSON.stringify(userExpenses, null, 2))
    }, [userExpenses])

    if (!activeGroupId && !groupDetails) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#0396FF' />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ marginTop: 45 }}>
            {groupDetails ? ( // Only render if groupDetails is truthy (not undefined or null)
                <View>
                    <View style={styles.topBar}>
                        <View style={styles.backButton}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Ionicons name="chevron-back-sharp" size={24} color="#000000" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.groupTitleContainer}>
                            <Text style={styles.groupTitle}>{groupDetails.groupName}</Text>
                        </View>

                        <TouchableOpacity onPress={moveToAddExpense}>
                            <View style={styles.moreInfoContainer}>
                                <Ionicons name='add' size={24} color='black' />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <ScrollView>
                            <Text>{JSON.stringify(userExpenses, null, 2)}</Text>
                        </ScrollView>
                    </View>
                </View>
            ) : (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='large' color='#0396FF' />
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
    },
    backButton: {
        paddingLeft: 20,
    },
    groupTitleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    groupTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    moreInfoContainer: {
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});