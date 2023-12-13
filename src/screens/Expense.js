import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Expense = () => {
  const route = useRoute();
  const { navigation, expense } = route.params;
  console.log(
    `inside the expense component: ${JSON.stringify(expense, null, 2)}`
  );
  return (
    <View>
      <Text>{JSON.stringify(expense, null, 2)}</Text>
    </View>
  );
};

export default Expense;

const styles = StyleSheet.create({});
