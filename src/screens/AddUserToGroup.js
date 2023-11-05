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
import DisplayGroup from '../components/DisplayGroup';
import { getAuthFromLocalStorage } from '../services/getAuth';

export default AddUserToGroup = ({ navigation }) => {
  // useEffect(() => {
  //   console.log('state = ' + members);
  // }, [members]);
  const groupURL = `http://${ip}/api/v1/group/`;

  const [inviteId, setInviteId] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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
        .get(`${groupURL}/invite/${inviteId.toLowerCase()}`)
        .then((res) => {
          setAvatar(res.data.avatar);
          setDate(res.data.date);
          setDescription(res.data.description);

          const membersArray = [...res.data.members];

          setMembers(membersArray);
          setName(res.data.name);
          setOwner(res.data.owner);

          setIsVisible(true);
        })
        .catch((err) => {
          alert('user already in the group');
          console.log(err);
        });
    } catch (err) {
      alert('user already exists');
      navigation.navigate('Home');
      return;
    }
  };

  const addToGroup = async () => {
    try {
      let user = await getAuthFromLocalStorage();
      user = JSON.parse(user);

      if (!user) return;

      const userId = user.user._id;

      const postUrl = `${groupURL}${inviteId.toLowerCase()}/member/${userId}`;
      console.log(postUrl)

      axios
        .post(postUrl)
        .then((res) => {
          setAvatar();
          setDate();
          setDescription();
          setMembers();
          setName();
          setOwner();
          setIsVisible(false);

          alert('group joined successfully!');
          navigation.navigate('Home');
        })
        .catch((err) => {
          alert('user already exists in the group');
          console.log(err);
        });

      return;
    } catch (error) {
      alert('error occured. retry after a while');
      console.log(error);
      return;
    }
  };

  return (
    <SafeAreaView style={{ marginTop: 45 }}>
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

      <View style={{ marginLeft: '10%', marginTop: '4%' }}>
        <DisplayGroup
          visible={isVisible}
          avatar={avatar}
          date={date}
          description={description}
          members={members}
          name={name}
          owner={owner}
          bills={[]}
          handlePress={addToGroup}
        />
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
