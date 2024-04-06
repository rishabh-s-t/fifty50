import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { avatarArray } from '../config';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DisplayBox from '../components/DisplayBox';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const UserDetails = ({ navigation, route }) => {
  const userDetails = route.params.userDetails;
  const [user, setUser] = useState(userDetails);

  useEffect(() => {
    console.log(JSON.stringify(user, null, 2));
  }, [user]);

  const logoutUser = async () => {
    await AsyncStorage.removeItem('@auth');
    alert('Logged out successfully!');
    navigation.navigate('Login');
  };

  const handleEdit = async () => {
    navigation.navigate('EditUser', { user });
  };

  return (
    <View>
      <View style={styles.topBarContainer}>
        <View style={styles.topBarColumn1}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name='chevron-back-sharp' size={24} color='#404040' />
          </TouchableOpacity>
        </View>

        <View style={styles.topBarColumn2}>
          <Text style={[styles.appTitle]}>Fifty50</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <View style={{ justifyContent: 'center' }}>
            <TouchableOpacity onPress={handleEdit}>
              <Feather name='edit' size={24} color='#404040' />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '5%',
        }}
      >
        <Image
          source={avatarArray[userDetails.userAvatar].src}
          style={styles.userAvatar}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View>
          <DisplayBox
            name={user.userName}
            email={user.userEmailID}
            phone={user.userPhoneNumber}
            upi={user.upiID}
          />
        </View>
      </View>
      <View style={{ marginLeft: '10%' }}>
        <Button buttonText={'logout'} handleSubmit={logoutUser} />
      </View>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  topBarContainer: {
    marginTop: '10%',
    marginBottom: '5%',
    flexDirection: 'row',
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
    height: 120,
    width: 120,
    borderRadius: 100,
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
