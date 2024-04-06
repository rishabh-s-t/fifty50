// CustomHeader.js
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { avatarArray, ip } from '../config';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import axios from 'axios';
import { getAuthFromLocalStorage } from '../services/getAuth';

const CustomHeader = ({
  navigation,
  route,
  options,
  groupName,
  groupDetails,
  activeGroup,
  inviteID,
}) => {
  const moveToAddExpense = () => {
    navigation.navigate('AddExpense', { groupDetails, activeGroup });
  };

  return (
    <SafeAreaView style={[styles.header, options.headerStyle]}>
      <View>
        <View style={styles.topBar}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Ionicons name='chevron-back-sharp' size={24} color='#ffffff' />
            </TouchableOpacity>
          </View>

          <View style={styles.groupTitleContainer}>
            <Text style={styles.groupTitle}>
              {groupName ? `${groupName}  (${inviteID})` : 'loading...'}
            </Text>
          </View>

          <TouchableOpacity onPress={moveToAddExpense}>
            <View style={styles.moreInfoContainer}>
              <Ionicons name='add' size={24} color='#ffffff' />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0396FF',
    height: 80, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    width: '100%',
  },
  backButton: {
    paddingLeft: 20,
  },
  groupTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  groupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  moreInfoContainer: {
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomHeader;
