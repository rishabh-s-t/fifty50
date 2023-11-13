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

const UserDetails = ({ navigation, route }) => {
  const userDetails = route.params.userDetails;
  const [user, setUser] = useState(userDetails);

  useEffect(() => {
    // console.log(user);
  }, [user]);

  const logoutUser = async () => {
    await AsyncStorage.removeItem('@auth');
    alert('Logged out successfully!');
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.topBarColumn1}>
          <Image
            source={avatarArray[userDetails.userAvatar].src}
            style={styles.userAvatar}
          />
        </TouchableOpacity>

        <View style={styles.topBarColumn2}>
          <Text style={[styles.appTitle]}>Fifty50</Text>
        </View>

        <TouchableOpacity style={[styles.topBarColumn3]}>
          <View style={styles.addGroupButton}>
            <Text>JJ</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: '10%' }}>
        <Button buttonText={'logout'} handleSubmit={logoutUser} />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
        }}
      >
        <View>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            UNDER DEVELOPMENT
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserDetails;

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
