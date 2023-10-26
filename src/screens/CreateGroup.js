import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import InputBox from '../components/forms/InputBox';
import GroupType from '../components/GroupType';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { groupAvatarMap, ip } from '../config';
import axios from 'axios';

export default CreateGroup = ({ navigation }) => {
  const [groupName, setGroupName] = useState('');
  const [groupAvatar, setGroupAvatar] = useState(0);
  const [groupDescription, setGroupDescription] = useState('');

  const saveGroup = async () => {
    try {
      let data = await AsyncStorage.getItem('@auth');
      let loginData = JSON.parse(data);

      if (!groupName || groupName === '') {
        alert('Please enter the group name');
        return;
      }

      await axios
        .post(`http://${ip}/api/v1/group/createGroup`, {
          groupName: groupName,
          groupAvatar: groupAvatar,
          usersInvolved: [loginData.user._id],
          owner: loginData.user._id,
          groupDescription: groupDescription,
        })
        .then(async (response) => {
          alert('Group created successfully!');

          const inviteID = response.data;
          //await AsyncStorage.setItem('@groups', JSON.stringify(data));
          navigation.navigate('Home');
          console.log(JSON.stringify(inviteID.invitation));
        })
        .catch((err) => {
          alert('Invalid operation');
          console.log(err);
        });
    } catch (error) {
      alert('Ran into an error while contacting the server');
      console.log(error);
    }
  };

  const moveToHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
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
          <Text style={{ fontSize: 18 }}>create group</Text>
        </View>
      </View>

      {/* Group Name Input */}
      <View style={{ marginTop: '20%', marginLeft: '10%' }}>
        <InputBox
          inputTitle={'Group Name*'}
          placeholderName={'group name here'}
          value={groupName}
          setValue={setGroupName}
        />
      </View>

      {/* Group Description */}
      <View style={{ marginLeft: '10%' }}>
        <InputBox
          inputTitle={'Group Description'}
          placeholderName={'group description here (optional)'}
          value={groupDescription}
          setValue={setGroupDescription}
        />
      </View>

      {/* Group Type */}
      <View style={{ marginLeft: '10%' }}>
        <Text style={styles.fieldTitle}>Group Icon</Text>
        <GroupType
          setGroupAvatar={setGroupAvatar}
          avatarsMap={groupAvatarMap}
        />
      </View>

      {/* Confirm Button */}
      <View style={{ marginLeft: '10%', marginTop: '60%' }}>
        <Button buttonText={'confirm'} handleSubmit={saveGroup} />
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
  fieldTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 10,
  },
});
