import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

const SettledExpense = ({ settledExpenses }) => {
  console.log(`SettledExpenses: ${JSON.stringify(settledExpenses, null, 2)}`);

  if (!settledExpenses) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SettledExpense</Text>
    </View>
  );
};

export default SettledExpense;

const styles = StyleSheet.create({});
