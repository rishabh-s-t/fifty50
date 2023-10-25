import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import { testUsers } from '../config';
import UserComponent from '../components/UserComponent';

const Bill = ({ navigation }) => {
  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');

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
          <Text style={{ fontSize: 18 }}>create bill split</Text>
        </View>
      </View>

      <View style={styles.center}>
        {/* Select billname*/}
        <InputBox
          inputTitle={'Bill Name*'}
          placeholderName={'enter bill name here'}
          value={billName}
          setValue={setBillName}
        />

        {/* Select bill amount*/}
        <InputBox
          inputTitle={'Bill Amount*'}
          placeholderName={'enter bill amount here'}
          value={billAmount}
          setValue={setBillAmount}
        />

        {/* Select bill type */}
        <Text style={styles.fieldTitle}>Bill Type</Text>
        <View style={styles.billTypeWrap}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/bills/default.png')}
              style={styles.billType}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/bills/bill.png')}
              style={styles.billType}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/bills/food.png')}
              style={styles.billType}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/bills/rent.png')}
              style={styles.billType}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/bills/travel.png')}
              style={styles.billType}
            />
          </TouchableOpacity>
        </View>

        {/* Select users */}
        <View style={styles.selectUsers}>
          <Text style={styles.fieldTitle}>Select Members</Text>
          <UserComponent users={testUsers} />
        </View>

        {/* Confirm Button */}
        <View style={{ marginTop: '4%' }}>
          <Button buttonText={'save'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Bill;

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
  center: {
    marginLeft: '9%',
    marginTop: '10%',
    justifyContent: 'center',
  },
  titleWrap: {
    marginTop: '2%',
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
  selectUsers: {
    height: '37%',
    width: '90%',
    marginBottom: '3%',
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    paddingTop: '5%',
  },
});
