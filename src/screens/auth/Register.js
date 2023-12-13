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

//importing axios
import axios from 'axios';
// InputBox
import InputBox from '../../components/forms/InputBox';
import Button from '../../components/Button';
import { ip } from '../../config';

export default Register = ({ navigation }) => {
  // States
  // Name
  const [userName, setUserName] = useState('');
  // Mobile Number
  const [phoneNumber, setPhoneNumber] = useState('');
  // Email
  const [emailID, setEmailID] = useState('');
  // Password
  const [password, setPassword] = useState('');
  // UPI
  const [upiID, setUpiID] = useState('');

  // Button Function
  const handleSubmit = async () => {
    try {
      if (!userName || !phoneNumber || !emailID || !password) {
        Alert.alert('Please fill all required fields');
        return;
      }

      //phonenumber, username, emailid, password, upiid, groupsinvolved

      axios
        .post(`http://${ip}/api/v1/user/register`, {
          userPhoneNumber: phoneNumber,
          userName: userName,
          userEmailID: emailID.toLowerCase(),
          password: password,
          upiID: upiID,
          groupsInvolved: [],
        })
        .then((response) => {
          Alert.alert(response.data.message);
          navigation.navigate('Login');
          // console.log(response.data.message);
        })
        .catch((error) => {
          Alert.alert(error.message);
        });
    } catch (error) {
      alert('Ran into an error while registering!');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.header}>
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
            {/* name */}
            <InputBox
              inputTitle={'Name*'}
              placeholderName={'name here'}
              autoComplete={'name'}
              value={userName}
              setValue={setUserName}
            />

            {/* mobile */}
            <InputBox
              inputTitle={'Mobile Number*'}
              placeholderName={'phone number here'}
              autoComplete={'tel'}
              keyboardType={'numeric'}
              value={phoneNumber}
              setValue={setPhoneNumber}
            />

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

            {/* upi */}
            <InputBox
              inputTitle={'UPI ID'}
              placeholderName={'upi id here'}
              value={upiID}
              setValue={setUpiID}
            />

            {/* confirm button */}
            <Button buttonText={'create account'} handleSubmit={handleSubmit} />
          </View>

          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontWeight: 'bold', color: '#0396FF' }}>
                Login
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
});
