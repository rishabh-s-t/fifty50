import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { avatarArray, expenseAvatar, ip } from '../config';
import axios from 'axios';
import DisplayIndividualMember from '../components/DisplayIndividualMember';
import ExpenseDisplay from '../components/ExpenseDisplay';
import TopBar from '../components/TopBar';
import Button from '../components/Button';
import ExpenseUser from '../components/ExpenseUser';
import { getAuthFromLocalStorage } from '../services/getAuth';

const Expense = () => {
  useEffect(() => {
    console.log(JSON.stringify(expense, null, 2));

    const getUserTemp = async () => {
      let user = await getAuthFromLocalStorage();
      user = JSON.parse(user);

      console.log('user->');
      console.log(user);
      setCurrentUser(user);
    };

    getUserTemp();
  }, []);

  const handleMarkAsSettled = async () => {
    const isOwner = 1;
  };

  const route = useRoute();
  const { navigation, expense } = route.params;
  const [currentUser, setCurrentUser] = useState();

  return (
    <SafeAreaView>
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.topBarColumn1}>
          <Ionicons name='chevron-back-sharp' size={24} color='#404040' />
        </TouchableOpacity>

        <View style={styles.topBarColumn2}>
          <Text style={[styles.appTitle]}>{`Expense`}</Text>
        </View>

        <View style={{ justifyContent: 'center' }}></View>
      </View>

      <View style={{ alignItems: 'center', pointerEvents: 'none' }}>
        <ExpenseDisplay expense={expense} />
      </View>

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            marginTop: '5%',
            alignItems: 'center',
            width: '90%',
          }}
        >
          {expense.membersBalance.map((member, index) => (
            <ExpenseUser
              key={index}
              name={member.name}
              balance={member.balance}
              id={member.id}
            />
          ))}
        </View>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View
          style={{
            width: '90%',
            marginTop: '5%',
            marginLeft: '10%',
            justifyContent: 'center',
          }}
        >
          <Button
            buttonText={'Mark as settled'}
            handleSubmit={handleMarkAsSettled}
          />
        </View>
      </View>

      <Text style={{ margin: 10 }}>{}</Text>
    </SafeAreaView>
  );
};

export default Expense;

const styles = StyleSheet.create({
  topBarContainer: {
    marginBottom: '5%',
    flexDirection: 'row',
  },
  topBarColumn1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    paddingLeft: 20,
  },
  topBarColumn2: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
  },
  topBarColumn3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
