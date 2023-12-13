import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { expenseAvatar, testExpense } from '../config';
import { MaterialIcons, Feather } from '@expo/vector-icons';

const ExpenseDisplay = ({ navigation, expense }) => {
  const [settled, setSettled] = useState('');

  useEffect(() => {
    // console.log(JSON.stringify(expense, null, 2));
    if (expense.isSettled === false) {
      setSettled('none');
    }
  }, [settled]);

  // console.log('type of expense prop: ', typeof (expense))
  const perPersonSplit = (
    expense.amount / expense.membersBalance.length
  ).toFixed(2);

  return (
    <View style={styles.expenseContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Expense', { navigation, expense });
        }}
      >
        <View style={styles.expenseMetaContainer}>
          <Image
            source={expenseAvatar[expense.avatar].src}
            style={styles.expenseAvatarImage}
          />

          <View>
            <Text style={styles.expenseTitle}>{expense.title}</Text>
            <Text style={styles.expenseAmount}>
              Total bill ₹{expense.amount}
            </Text>
          </View>
        </View>

        <View style={styles.splitMembersContainer}>
          <Text style={{ fontSize: 17 }}>
            Split into {expense.membersBalance.length} {`(₹${perPersonSplit})`}
          </Text>
        </View>

        <View style={styles.membersContainer}>
          <MaterialIcons name='group' size={24} color='#a6a6a6' />
          <Text style={styles.membersText}>
            {expense.membersBalance.length} Members
          </Text>
        </View>
      </TouchableOpacity>

      <View style={[styles.settledPosition, { display: settled }]}>
        <View style={styles.settledIconContainer}>
          <View style={styles.settledIcon}>
            <Feather name='check' size={24} color='#FFFFFF' />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExpenseDisplay;

const styles = StyleSheet.create({
  expenseContainer: {
    borderWidth: 1,
    borderColor: '#888888',
    width: '90%',
    height: 142,
    borderRadius: 20,
    flexDirection: 'row',
  },
  expenseMetaContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingTop: 8,
    paddingLeft: 8,
    gap: 10,
  },
  expenseAvatarImage: {
    height: 48,
    width: 48,
  },
  expenseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  expenseAmount: {
    fontSize: 16,
  },
  splitMembersContainer: {
    paddingLeft: 8,
    paddingTop: 20,
  },
  membersContainer: {
    paddingLeft: 8,
    paddingTop: 8,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  membersText: {
    color: '#888888',
    fontSize: 16,
  },
  settledIconContainer: {
    backgroundColor: '#5BDA8C',
    height: 35,
    width: 35,
    borderRadius: 12,
  },
  settledIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settledPosition: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 6,
    marginRight: 6,
  },
});
