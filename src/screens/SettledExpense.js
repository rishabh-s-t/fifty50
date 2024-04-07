import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import ExpenseDisplay from '../components/ExpenseDisplay';

const SettledExpense = ({ navigation, settledExpenses }) => {
  // console.log(`type of setttled expense: ${typeof settledExpenses}`);
  // console.log(`SettledExpenses in setttled expense screen: ${JSON.stringify(settledExpenses, null, 2)}`);

  if (!settledExpenses) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 15,
        }}
      >
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }

  if (settledExpenses.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: '#939393' }}>No settled expenses</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ marginTop: 10, marginBottom: 10 }}>
      <View style={{ flex: 1, alignItems: 'center', marginVertical: '1%' }}>
        {settledExpenses.map((expense, index) => (
          <ExpenseDisplay
            navigation={navigation}
            expense={expense}
            key={index}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default SettledExpense;

const styles = StyleSheet.create({});
