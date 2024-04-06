import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import Modal from 'react-native-modal';
import axios from 'axios';
import InputBox from '../components/forms/InputBox';
import Button from '../components/Button';
import { avatarArray, ip } from '../config';

export default EditUser = ({ navigation, route }) => {
  useEffect(() => {
    console.log(user);
    console.log(user.userPhoneNumber);
  }, [user]);

  useEffect(() => {
    console.log('avatarid->', avatarID);
  }, [avatarID]);
  const userDetails = route.params.user;

  const [user, setUser] = useState(userDetails);
  // Name
  const [userName, setUserName] = useState(user.userName);
  // Mobile Number
  const [phoneNumber, setPhoneNumber] = useState(+user.userPhoneNumber);
  // Email
  const [emailID, setEmailID] = useState(user.userEmailID);
  // UPI
  const [upiID, setUpiID] = useState(user.upiID);
  //Avatar
  const [avatarID, setAvatarID] = useState(+user.userAvatar);

  const [modalVisible, setModalVisible] = useState(false);

  const numColumns = 3;

  //Avatar array
  const avatarArray = [
    {
      id: 0,
      src: require('../../assets/icons/avatar1.png'),
    },
    {
      id: 1,
      src: require('../../assets/icons/avatar2.png'),
    },
    {
      id: 2,
      src: require('../../assets/icons/avatar3.png'),
    },
    {
      id: 3,
      src: require('../../assets/icons/avatar4.png'),
    },
    {
      id: 4,
      src: require('../../assets/icons/avatar5.png'),
    },
    {
      id: 5,
      src: require('../../assets/icons/avatar6.png'),
    },
    {
      id: 6,
      src: require('../../assets/icons/avatar7.png'),
    },
    {
      id: 7,
      src: require('../../assets/icons/avatar8.png'),
    },
    {
      id: 8,
      src: require('../../assets/icons/avatar9.png'),
    },
    {
      id: 9,
      src: require('../../assets/icons/avatar10.png'),
    },
    {
      id: 10,
      src: require('../../assets/icons/avatar11.png'),
    },
    {
      id: 11,
      src: require('../../assets/icons/avatar12.png'),
    },
  ];

  // Button Function
  const handleSubmit = async () => {
    try {
      const updatedUserData = {
        userName: userName,
        userPhoneNumber: phoneNumber,
        userEmailID: emailID.toLowerCase(),
        upiID: upiID,
      };

      const response = await axios.post(
        `http://${ip}/api/v1/user/update/${user._id}`,
        updatedUserData
      );

      Alert.alert(response.data.message);
      navigation.navigate('Home');
    } catch (error) {
      alert('Ran into an error while updating!');
      console.log(error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5%',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              source={avatarArray[avatarID].src}
              style={styles.userAvatar}
            />
          </TouchableOpacity>
        </View>
        {/* User Registration Form */}
        <View style={styles.registrationForm}>
          {/* name */}
          <InputBox
            inputTitle={'Name'}
            placeholderName={user.userName}
            autoComplete={'name'}
            value={userName}
            setValue={setUserName}
          />

          {/* mobile */}
          <InputBox
            inputTitle={'Mobile Number'}
            placeholderName={`${user.userPhoneNumber}`}
            autoComplete={'tel'}
            keyboardType={'numeric'}
            value={phoneNumber}
            setValue={setPhoneNumber}
          />

          {/* email */}
          <InputBox
            inputTitle={'Email ID'}
            placeholderName={`${user.userEmailID}`}
            autoComplete={'email'}
            keyboardType={'email-address'}
            value={emailID}
            setValue={setEmailID}
          />

          {/* upi */}
          <InputBox
            inputTitle={'UPI ID'}
            placeholderName={`${user.upiID}`}
            value={upiID}
            setValue={setUpiID}
          />

          {/* confirm button */}
          <Button buttonText={'confirm'} handleSubmit={handleSubmit} />
          <Button
            buttonText={'go back'}
            handleSubmit={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <Modal
          isVisible={modalVisible}
          style={styles.modal}
          onBackButtonPress={() => setModalVisible(false)}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.modalText}>select a user avatar</Text>
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: '90%', width: '95%' }}>
              <FlatList
                data={avatarArray}
                renderItem={({ item }) => (
                  <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                    <TouchableOpacity
                      onPress={() => {
                        setAvatarID(item.id);
                        setModalVisible(false);
                      }}
                    >
                      <Image
                        key={item.id}
                        style={styles.avatarModal}
                        source={item.src}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                numColumns={numColumns}
                style={{ flex: 1 }}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: '15%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2E6FF',
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96,
    height: 150,
    marginBottom: 5,
  },
  logoContainer: {
    height: 150,
    width: 150,
  },
  logo: {
    marginTop: 20,
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  registrationForm: {
    marginTop: '4%',
    marginBottom: '2%',
    marginLeft: 29,
  },
  userAvatar: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 200,
    marginVertical: 10,
  },
  logoContainer: {
    height: 100,
    width: 200,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  avatarContainer: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    borderRadius: 200,
    height: 300,
    width: 300,
    marginVertical: 25,
  },
  avatarModal: {
    borderRadius: 200,
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  save: {
    marginLeft: 40,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
  },
  modalText: {
    marginVertical: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0396FF',
  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: Dimensions.get('window').width / 4, // approximate a square
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
});
