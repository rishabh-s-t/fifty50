import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
import ExpenseDisplay from '../components/ExpenseDisplay';

const ActiveExpense = ({ activeExpenses }) => {
  // console.log(`type of active expense: ${typeof activeExpenses}`);
  // console.log(`ActiveExpenses in active expense screen: ${JSON.stringify(activeExpenses, null, 2)}`);

  if (!activeExpenses) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }

  return (
    <ScrollView style={{ marginTop: 10, marginBottom: 10 }}>
      <View style={{ flex: 1, alignItems: 'center', gap: 15 }}>
        {activeExpenses.map((expense, index) => (
          <ExpenseDisplay expense={expense} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ActiveExpense;

const styles = StyleSheet.create({});
