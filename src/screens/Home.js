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
import React, { useState, useEffect } from 'react';
import CreateGroup from '../screens/CreateGroup';
import InputBox from '../components/forms/InputBox';
import Button from '../components/Button';
import UserComponent from '../components/UserComponent';
import Transaction from '../components/Transaction';
import { avatarArray, ip, testUsers } from '../config';
import Modal from 'react-native-modal';

import { Ionicons } from '@expo/vector-icons';
import { getAuthFromLocalStorage } from '../services/getAuth';
import axios from 'axios';
import DisplayAllGroups from '../components/DisplayAllGroups';

const windowHeight = Dimensions.get('window').height;
const dynamicMarginTop = windowHeight * 0.25;

export default Home = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState();
  const [groupDetails, setGroupDetails] = useState();

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    if (userDetails) getAllUserGroups();
  }, [userDetails]);

  useEffect(() => {
    // console.log(JSON.stringify(groupDetails, null, 2));
  }, [groupDetails]);

  const getUserDetails = async () => {
    let user = await getAuthFromLocalStorage();
    user = JSON.parse(user);
    setUserDetails(user);
  };

  const getAllUserGroups = async () => {
    const getGroupsEndpoint = `http://${ip}/api/v1/group/groups`;

    try {
      let groups = await axios.get(getGroupsEndpoint, {
        params: {
          groupIds: userDetails.user.groupsInvolved.join(','),
        },
      });
      setGroupDetails(groups.data.groups);
    } catch (error) {
      console.log(error.message);
    }
  };

  const moveToUserDetails = () => {
    navigation.navigate('UserDetails', { userDetails });
  };

  const moveToCreateGroup = () => {
    navigation.navigate('CreateGroup');
  };

  const moveToBill = () => {
    navigation.navigate('Bill');
  };

  const moveToJoinGroup = () => {
    navigation.navigate('JoinGroup');
  };

  if (!userDetails) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Top bar - User Account Touchable (later) |
                      Home Screen |
                      Add Group | */}
        <View style={styles.topBarContainer}>
          <TouchableOpacity
            style={styles.topBarColumn1}
            onPress={moveToUserDetails}
          >
            <Image
              source={avatarArray[userDetails.user.userAvatar].src}
              style={styles.userAvatar}
            />
          </TouchableOpacity>

          <View style={styles.topBarColumn2}>
            <Text style={[styles.appTitle]}>Fifty50</Text>
          </View>

          <TouchableOpacity
            style={[styles.topBarColumn3]}
            onPress={moveToCreateGroup}
          >
            <View style={styles.addGroupButton}>
              <Ionicons name='add' size={24} color='black' />
            </View>
          </TouchableOpacity>
        </View>

        {/* To Pay/Receive */}
        <View style={styles.myGroupsContainer}>
          <View style={{ marginLeft: '5%' }}>
            <Text style={styles.myGroupsTitle}>TODO</Text>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text style={styles.viewGroupsTitle}>Todo</Text>
          </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.userExpenseContainer}></View>
        </View>

        {/* Display groups */}
        <View style={styles.myGroupsContainer}>
          <View style={{ marginLeft: '5%' }}>
            <Text style={styles.myGroupsTitle}>My Groups</Text>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text style={styles.viewGroupsTitle}>{`View All >>`}</Text>
          </TouchableOpacity>
        </View>

        {/* Groups are displayed here */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView style={styles.groupsContainer} horizontal={true}>
            <DisplayAllGroups groups={groupDetails} />
          </ScrollView>
        </View>

        <View style={styles.myGroupsContainer}>
          <View style={{ marginLeft: '5%' }}>
            <Text style={styles.myGroupsTitle}>Groups to pay</Text>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <Text style={styles.viewGroupsTitle}>{`View All >>`}</Text>
          </TouchableOpacity>
        </View>
        {/* Expenses are displayed here */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.expenseContainer}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
  },
  topBarColumn1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    paddingLeft: 20,
  },
  topBarColumn2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  topBarColumn3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  userAvatar: {
    height: 48,
    width: 48,
    borderRadius: 25,
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#0396FF',
  },
  addGroupButton: {
    backgroundColor: '#ECECEC',
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  userExpenseContainer: {
    backgroundColor: '#aaaaff',
    height: 65,
  },
  myGroupsContainer: {
    flexDirection: 'row',
    marginTop: 12,
  },
  myGroupsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewGroupsTitle: {
    marginRight: '10%',
    color: '#808080',
  },
  groupsContainer: {
    marginTop: 20,
    height: 185,
    width: '90%',
  },
  expenseContainer: {
    marginTop: 15,
    backgroundColor: '#aaffff',
    height: 300,
    width: '90%',
  },
});
