import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// InputBox
import InputBox from '../../components/forms/InputBox';
import Button from '../../components/Button';
import { ip } from '../../config';

export default Login = ({ navigation }) => {
  // States
  // Email
  const [emailID, setEmailID] = useState('');
  // Password
  const [password, setPassword] = useState('');

  // Button Function
  const handleSubmit = async () => {
    try {
      if (!emailID || !password) {
        Alert.alert('Please fill all required fields');
        return;
      }

      await axios
        .post(`http://${ip}/api/v1/user/login`, {
          userEmailID: emailID.toLowerCase(),
          password: password,
        })
        .then(async (response) => {
          const data = response.data;

          await AsyncStorage.setItem('@auth', JSON.stringify(data));

          console.log(data.user.showAvatar);

          if (data.user.showAvatar === true) {
            navigation.navigate('UserAvatar');
          } else {
            navigation.navigate('Home');
          }

          console.warn(data.message);
        })
        .catch((err) => {
          alert('Invalid credentials');
          console.log(err);
        });
    } catch (error) {
      alert('Ran into an error while logging you in');
      console.log(error);
    }
  };

  // const getLcoalStorageData = async () => {
  //     let data = await AsyncStorage.getItem("@auth");
  //     console.log("Local Storage ==> ", data);
  // };
  // getLcoalStorageData();

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/illustration/login.png')}
            style={styles.logo}
          />
        </View>
      </View>

      {/* Logo */}
      <View style={styles.logoHeader}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/logo.png')}
            style={styles.logo}
          />
        </View>
      </View>
      <KeyboardAvoidingView behavior='height' enabled>
        <ScrollView>
          {/* User Registration Form */}
          <View style={styles.registrationForm}>
            {/* email */}
            <InputBox
              inputTitle={'Email ID*'}
              placeholderName={'email id here'}
              autoComplete={'email'}
              keyboardType={'email-address'}
              value={emailID}
              setValue={setEmailID}
            />

            {/* password */}
            <InputBox
              inputTitle={'Password*'}
              placeholderName={'password here'}
              autoComplete={'new-password'}
              secureTextEntry={true}
              value={password}
              setValue={setPassword}
            />

            {/* confirm button */}
            <Button buttonText={'login'} handleSubmit={handleSubmit} />
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontWeight: 'bold' }}>new user?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={{ fontWeight: 'bold', color: '#0396FF' }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2E6FF',
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96,
    height: 350,
    marginBottom: 5,
  },
  logoHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    height: 130,
    width: 130,
  },
  logo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  imageContainer: {
    height: 350,
    width: 350,
  },
  registrationForm: {
    marginBottom: '3%',
    marginLeft: 29,
  },
});
