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
import { avatarArray, testUsers } from '../config';
import Modal from 'react-native-modal';

import { Ionicons } from '@expo/vector-icons';
import { getAuthFromLocalStorage } from '../services/getAuth';

const windowHeight = Dimensions.get('window').height;
const dynamicMarginTop = windowHeight * 0.25;

export default Home = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    getUserDetails();
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(userDetails));
  }, [userDetails]);

  const getUserDetails = async () => {
    let user = await getAuthFromLocalStorage();
    user = JSON.parse(user);
    setUserDetails(user);
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

        {/*  */}
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
});
