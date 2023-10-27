import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import InputBox from '../components/forms/InputBox';
import axios from 'axios';
import { ip } from '../config';

export default AddUserToGroup = ({ navigation }) => {
  // useEffect(() => {
  //   console.log('state = ' + members);
  // }, [members]);

  const getGroupURL = `http://${ip}/api/v1/group/`;

  const [inviteId, setInviteId] = useState('');

  //group data
  const [avatar, setAvatar] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();
  const [members, setMembers] = useState([]);
  const [name, setName] = useState();
  const [owner, setOwner] = useState();

  const moveToHome = () => {
    navigation.navigate('Home');
  };

  const fetchGroup = async () => {
    try {
      if (!inviteId || inviteId.length < 5) {
        alert('invalid invite id');
        return;
      }

      await axios
        .get(getGroupURL + inviteId)
        .then((res) => {
          setAvatar(res.data.avatar);
          setDate(res.data.date);
          setDescription(res.data.description);

          const membersArray = [...res.data.members];

          setMembers(membersArray);
          setName(res.data.name);
          setOwner(res.data.owner);
        })
        .catch((err) => {
          alert('some error occured');
          console.log(err);
        });
    } catch (err) {
      alert('error occured. retry after a while');
      console.log(err);
      return;
    }
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
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={fetchGroup}>
            <View style={styles.getGroupWrapper}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                get groups
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginLeft: '10%', marginTop: '20%' }}>
        <Text>{avatar}</Text>
        <Text>{date}</Text>
        <Text>{description}</Text>
        <Text>{members}</Text>
        <Text>{name}</Text>
        <Text>{owner}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  getGroupWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    backgroundColor: '#0396FF',
    borderRadius: 20,
    height: 50,
    width: 100,
  },
});
