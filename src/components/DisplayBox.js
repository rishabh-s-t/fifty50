import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Box from './Box';

const DisplayBox = ({
  name = 'acs',
  phone = '1234567890',
  email = 'abc@abc.com',
  upi = 'unavailable',
}) => {
  if (upi === '') upi = 'unavailable';
  return (
    <View>
      <Box input={'Name'} output={name} />

      <Box input={'Phone'} output={phone} />

      <Box input={'Email'} output={email} />

      <Box input={'UPI'} output={upi} />
    </View>
  );
};

export default DisplayBox;
