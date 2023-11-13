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
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { avatarArray, ip } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import axios from 'axios';
import { getAuthFromLocalStorage } from '../services/getAuth';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActiveExpense from './ActiveExpense';
import SettledExpense from './SettledExpense';
import { FontAwesome } from '@expo/vector-icons';
import CustomHeader from '../components/CustomHeader';

const Tab = createBottomTabNavigator();

export default ActiveGroup = ({ navigation, route }) => {
  const activeGroupId = route.params.activeGroup;
  const [showModal, setShowModal] = useState(false);
  const [groupInviteId, setGroupInviteId] = useState();
  const [groupName, setGroupName] = useState();
  const [groupDetails, setGroupDetails] = useState();
  const [userId, setUserId] = useState();
  const [activeExpenses, setActiveExpenses] = useState();
  const [settledExpenses, setSettledExpenses] = useState();

  const getAllExpensesOfUser = async () => {
    const getAllExpenseEndpoint = `http://${ip}/api/v1/expense/group/${groupDetails._id}/member/${userId}`;
    // console.log(getAllExpenseEndpoint);

    const expenses = await axios.get(getAllExpenseEndpoint);
    setActiveExpenses(expenses.data.activeExpenses);
    setSettledExpenses(expenses.data.settledExpenses);
  };

  const getGroupDetails = async () => {
    const getGroupEndpoint = `http://${ip}/api/v1/group/expense/${activeGroupId}`;
    const groupDetailsResponse = await axios.get(getGroupEndpoint);

    setGroupName(groupDetailsResponse.data.groupName);
    setGroupInviteId(groupDetailsResponse.data.inviteID);
    setGroupDetails(groupDetailsResponse.data);
  };

  const getUserId = async () => {
    let user = await getAuthFromLocalStorage();
    user = JSON.parse(user);
    setUserId(user.user._id); // Make sure user._id exists in the data you retrieve
  };

  const moveToAddExpense = () => {
    navigation.navigate('AddExpense', { groupDetails });
  };

  useEffect(() => {
    getGroupDetails();
  }, []);

  useEffect(() => {
    if (groupDetails) {
      getUserId();
    }
  }, [groupDetails]);

  useEffect(() => {
    getAllExpensesOfUser();
  }, [userId]);

  if (!activeGroupId && !groupDetails) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }

  return (
    <Tab.Navigator
      initialRouteName='Active'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Active') {
            iconName = focused ? 'ios-cash' : 'ios-cash-outline';
          } else if (route.name === 'Settled') {
            iconName = focused
              ? 'checkmark-circle'
              : 'checkmark-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0396FF',
        tabBarInactiveTintColor: '#939393',
        header: ({ navigation, route, options }) => (
          <CustomHeader
            navigation={navigation}
            route={route}
            options={options}
            groupName={groupName}
            groupDetails={groupDetails}
            activeGroup={activeGroupId}
          />
        ),
      })}
    >
      <Tab.Screen
        name='Active'
        component={() => <ActiveExpense activeExpenses={activeExpenses} />}
        options={{
          title: 'Active Expenses',
          headerTitleStyle: { color: 'white' }, // Add any additional styles
        }}
      />
      <Tab.Screen
        name='Settled'
        component={() => <SettledExpense settledExpenses={settledExpenses} />}
        options={{
          title: 'Settled Expenses',
          headerTitleStyle: { color: 'white' }, // Add any additional styles
        }}
      />
    </Tab.Navigator>
  );
};

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
    fontWeight: 'bold',
  },
  moreInfoContainer: {
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
