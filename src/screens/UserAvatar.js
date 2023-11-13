import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { ip } from '../config';

export default UserAvatar = ({ navigation }) => {
  // Current Avatar ID
  const [avatarID, setAvatarID] = useState(0);

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

  // Avatar Modal State
  const [modalVisible, setModalVisible] = useState(false);

  // Save Avatar Function
  const saveAvatar = async () => {
    let data = await AsyncStorage.getItem('@auth');
    let loginData = JSON.parse(data);

    const email = loginData.user.userEmailID;

    await axios
      .post(`http://${ip}/api/v1/user/updateAvatar`, {
        userEmailID: email,
        showAvatar: false,
        userAvatar: avatarID,
      })
      .then(async (response) => {
        const apiData = response.data;

        // console.log('Received Data:', apiData);

        const modifiedData = { ...loginData, user: { ...loginData.user, userAvatar: avatarID } }
        // console.log('Modified Data:', modifiedData);

        await AsyncStorage.setItem('@auth', JSON.stringify(modifiedData));
        alert(apiData.message);
        navigation.navigate('Home');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
      </View>

      {/* User Avatar */}
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image style={styles.avatar} source={avatarArray[avatarID].src} />
        </TouchableOpacity>
        <Text style={{ marginVertical: 10, fontSize: 16, fontWeight: 'bold' }}>
          click to change avatar
        </Text>
      </View>

      {/* Submit Button */}
      <View style={styles.save}>
        <Button buttonText={'save'} handleSubmit={saveAvatar} />
      </View>

      {/* Modal */}
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
    </View>
  );
};

const styles = StyleSheet.create({
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
