import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

const ActiveExpense = ({ activeExpenses }) => {
  console.log(`Active Expenses: ${JSON.stringify(activeExpenses, null, 2)}`);

  if (!activeExpenses) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ActiveExpense</Text>
    </View>
  );
};

export default ActiveExpense;

const styles = StyleSheet.create({});
