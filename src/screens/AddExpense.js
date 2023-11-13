import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { expenseAvatar, ip, testUsers } from '../config';
import UserComponent from '../components/UserComponent';
import axios from 'axios';
import ExpenseOwnerDropdown from '../components/ExpenseOwnerDropdown';

export default AddExpense = ({ navigation, route }) => {
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [selectedExpenseAvatar, setSelectedExpenseAvatar] = useState(1);

  const [groupInviteId, setGroupInviteId] = useState();
  const [memberDetails, setMemberDetails] = useState([]);
  const [groupId, setGroupId] = useState('');

  const [billName, setBillName] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [billAvatar, setBillAvatar] = useState(1);
  const [paidBy, setPaidBy] = useState('');
  const [billDescription, setBillDescription] = useState('');

  const groupInput = route.params.groupDetails;
  // console.log(`group input -> ${JSON.stringify(groupInput, null, 2)}`)

  useEffect(() => {
    setMemberDetails(groupInput.usersInvolved);
    setGroupInviteId(groupInput.inviteID);
    setGroupId(groupInput._id);
  }, []);

  useEffect(() => {
    // console.log(JSON.stringify(memberDetails, null, 2))
  }, [memberDetails]);

  const saveExpense = async () => {
    if (!billName) alert('bill name is required!');
    if (!paidBy) alert('please select who paid for the bill?');
    if (!billAmount) alert('enter a valid amount');
    if (!selectedUserIds || selectedUserIds.length < 2)
      alert('at least 2 members are required for the split');

    let payload = {
      title: billName,
      group: groupId,
      paidBy: paidBy,
      description: billDescription,
      amount: Number(billAmount),
      avatar: billAvatar,
      members: selectedUserIds,
    };

    let postExpenseEndpoint = `http://${ip}/api/v1/expense`;

    console.log(
      `endpoint - ${postExpenseEndpoint}\npayload  ${JSON.stringify(payload)}`
    );

    await axios
      .post(postExpenseEndpoint, payload)
      .then((response) => {
        let expense = response.data;
        console.log(expense);
        navigation.goBack();
        return;
      })
      .catch((err) => {
        console.log(err);
        navigation.goBack();
      });
    // try {
    //     const expense = await axios.post(postExpenseEndpoint, payload)
    //     alert(expense.message)
    //     console.log(expense.expense)
    // } catch (error) {
    //     alert('ran into an internal error')
    //     navigation.navigate('Home')
    //     return;
    // }
  };

  const moveToActiveGroup = () => {
    navigation.goBack();
  };

  const handleSelectionChange = (newSelectedUserIds) => {
    setSelectedUserIds(newSelectedUserIds);
  };

  return (
    <SafeAreaView style={{ marginTop: 45 }}>
      {/* Top Bar */}
      <View style={styles.topBarContainer}>
        {/* Back Button */}
        <TouchableOpacity
          style={[styles.topBarItem]}
          onPress={moveToActiveGroup}
        >
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

        {/* Select bill description*/}
        {/* <InputBox
                    inputTitle={'Bill Description'}
                    placeholderName={'what\'s it for?'}
                    value={billDescription}
                    setValue={setBillDescription}
                /> */}

        {/* Select bill type */}
        <Text style={styles.fieldTitle}>Bill Type</Text>
        <View style={styles.billTypeWrap}>
          {expenseAvatar.map((avatar, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setBillAvatar(index);
              }}
            >
              <Image
                source={avatar.src}
                style={[
                  styles.billType,
                  index === billAvatar && styles.selectedExpense,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <Text style={styles.fieldTitle}>Who Paid?*</Text>
          <ExpenseOwnerDropdown users={memberDetails} setPaidBy={setPaidBy} />
        </View>

        {/* Select users */}
        <View style={styles.selectUsers}>
          <Text style={styles.fieldTitle}>Select Members</Text>
          <UserComponent
            users={memberDetails}
            selectedUserIds={selectedUserIds}
            onSelectionChange={handleSelectionChange}
          />
        </View>

        {/* Confirm Button */}
        <View style={{ marginTop: '4%' }}>
          <Button buttonText={'save'} handleSubmit={saveExpense} />
        </View>
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
    height: 52,
    width: 52,
    marginRight: '4%',
  },
  selectUsers: {
    height: 250,
    width: '90%',
    marginTop: '5%',
    marginBottom: '2%',
    backgroundColor: '#ECECEC',
    borderRadius: 20,
    paddingTop: '3%',
    paddingLeft: '1%',
  },
  selectedExpense: {
    borderWidth: 4,
    borderColor: '#000000',
    opacity: 0.8,
  },
});
