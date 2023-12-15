import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';

const Expense = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: '33%',
            paddingHorizontal: 15,
          }}
        >
          <Ionicons name='chevron-back' size={24} color='black' />
        </View>

        <View
          style={{
            width: '33%',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 20 }}>Details</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '34%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingHorizontal: 15,
          }}
        >
          <Feather name='edit' size={22} color='black' />
          <MaterialIcons name='delete' size={22} color='black' />
        </View>
      </View>

      <View>
        <Text>jsadjsad</Text>
      </View>
    </SafeAreaView>
  );
};

export default Expense;

const styles = StyleSheet.create({});
