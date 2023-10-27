import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import CreateGroup from '../screens/CreateGroup';
import InputBox from '../components/forms/InputBox';
import Button from '../components/Button';
import UserComponent from '../components/UserComponent';
import Transaction from '../components/Transaction';
import { testUsers } from '../config';

export default Home = ({ navigation }) => {
  const moveToCreateGroup = () => {
    navigation.navigate('CreateGroup');
  };

  const moveToBill = () => {
    navigation.navigate('Bill');
  };

  const moveToJoinGroup = () => {
    navigation.navigate('JoinGroup');
  };

  return (
    // <CreateGroup />
    <SafeAreaView>
      <View style={{ marginLeft: '10%' }}>
        <TouchableOpacity onPress={moveToCreateGroup}>
          <Text>Create Group</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginLeft: '10%', marginTop: '10%' }}>
        <TouchableOpacity onPress={moveToJoinGroup}>
          <Text>Join group</Text>
        </TouchableOpacity>
      </View>
      {/* Add Bill Split */}
      <TouchableOpacity onPress={moveToBill}>
        <Text style={{ margin: 50 }}>Open Add Bill Modal</Text>
      </TouchableOpacity>

      {/* Transaction Component */}
      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
        <Transaction
          billAvatar={0}
          billTitle={'Maggie'}
          billAmount={1000}
          billStatus={0}
          splitParticipants={4}
          splitAmount={250}
        />
        <Transaction
          billAvatar={1}
          billTitle={'Shopping'}
          billAmount={4000}
          billStatus={1}
          splitParticipants={4}
          splitAmount={1000}
        />
        <Transaction
          billAvatar={3}
          billTitle={'Hotel'}
          billAmount={10000}
          billStatus={2}
          splitParticipants={4}
          splitAmount={2500}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    height: '90%',
  },
  center: {
    marginLeft: '9%',
    marginTop: '10%',
    justifyContent: 'center',
  },
  titleWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  billSplitModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    marginTop: '10%',
  },
  fieldTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
    marginBottom: 10,
  },
  memberScrollView: {
    height: '50%',
  },
  billTypeWrap: {
    flexDirection: 'row',
    marginBottom: '5%',
  },
  billType: {
    borderRadius: 20,
    height: 47,
    width: 47,
    marginRight: '4%',
  },
});
