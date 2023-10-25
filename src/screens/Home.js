import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import CreateGroup from '../components/CreateGroup';
import Modal from 'react-native-modal';
import InputBox from '../components/forms/InputBox';
import Button from '../components/Button';
import UserComponent from '../components/UserComponent';
import Transaction from '../components/Transaction';

export default Home = ({ navigation }) => {
  const [billModal, setBillModal] = useState(false);
  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');

  const moveToGroup = () => {
    navigation.navigate('Group');
  };

  return (
    // <CreateGroup />
    <SafeAreaView>
      <View style={{ marginLeft: '10%' }}>
        <TouchableOpacity onPress={moveToGroup}>
          <Text>Move to group screen</Text>
        </TouchableOpacity>
      </View>
      {/* Add Bill Split */}
      <TouchableOpacity onPress={() => setBillModal(true)}>
        <Text style={{ margin: 50 }}>Open Add Bill Modal</Text>
      </TouchableOpacity>

      {/* Add Bill Modal */}
      <Modal
        isVisible={billModal}
        onBackdropPress={() => setBillModal(false)}
        style={styles.billSplitModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.titleWrap}>
            <Text style={{ fontSize: 16 }}>create bill split</Text>
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
            <View
              style={{
                height: '37%',
                width: '90%',
                marginBottom: '3%',
                backgroundColor: '#ECECEC',
                borderRadius: 20,
                paddingTop: '5%',
              }}
            >
              <Text style={styles.fieldTitle}>Select Members</Text>
              <ScrollView>
                {/* User Component */}
                {/* Make the user component dynamic by passing an array of objects as a prop and rendering them. TODO today */}
                <UserComponent
                  username={'Rishabh Singh Tomar'}
                  userPhoneNumber={'+91-6266505214'}
                  avatarID={0}
                />

                <UserComponent
                  username={'Vaidika Ranka'}
                  userPhoneNumber={'+91-8209082030'}
                  avatarID={1}
                />

                <UserComponent
                  username={'Sarthak Waliwadekar'}
                  userPhoneNumber={'+91-6266505214'}
                  avatarID={2}
                />

                <UserComponent
                  username={'Tanishka Singh'}
                  userPhoneNumber={'+91-6266505214'}
                  avatarID={3}
                />

                <UserComponent
                  username={'Om Patel'}
                  userPhoneNumber={'+91-6266505214'}
                  avatarID={4}
                />
              </ScrollView>
            </View>

            {/* Confirm Button */}
            <Button buttonText={'save'} />
          </View>
        </View>
      </Modal>

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
