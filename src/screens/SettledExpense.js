import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
import ExpenseDisplay from '../components/ExpenseDisplay';

const SettledExpense = ({ settledExpenses }) => {
  // console.log(`type of setttled expense: ${typeof settledExpenses}`);
  // console.log(`SettledExpenses in setttled expense screen: ${JSON.stringify(settledExpenses, null, 2)}`);

  if (!settledExpenses) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 15 }}>
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }

  return (
    <ScrollView style={{ marginTop: 10, marginBottom: 10, }}>
      <View style={{ flex: 1, alignItems: 'center', }}>
        {settledExpenses.map((expense, index) => (
          <ExpenseDisplay expense={expense} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};

export default SettledExpense;

const styles = StyleSheet.create({});
