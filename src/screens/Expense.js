import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { avatarArray, expenseAvatar, ip } from '../config';
import axios from 'axios';
import DisplayIndividualMember from '../components/DisplayIndividualMember';

const Expense = () => {
  const route = useRoute();
  const { navigation, expense } = route.params;

  return (
    <SafeAreaView>
      <Text style={{ margin: 10 }}>{JSON.stringify(expense, null, 2)}</Text>
    </SafeAreaView>
  );
};

export default Expense;

const styles = StyleSheet.create({});
