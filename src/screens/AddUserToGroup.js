import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import InputBox from '../components/forms/InputBox';

export default AddUserToGroup = ({ navigation }) => {
  const [inviteId, setInviteId] = useState('');
  const moveToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <TopBar
        topBarTitle={'add user to group'}
        backButtonHandler={moveToHome}
      />

      <View style={{ marginLeft: '10%', marginTop: '20%' }}>
        <InputBox
          inputTitle={'Group ID*'}
          placeholderName={'group id here'}
          value={inviteId}
          setValue={setInviteId}
        />
      </View>

      <View style={{ marginLeft: '10%', marginTop: '20%' }}>
        {/* Display group component */}
        {/* 1. Fetch the group based on the invite id */}
        {/* 2. Display the details */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
