import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const GroupType = ({ setGroupAvatar, avatarsMap }) => {
  return (
    <View style={styles.billTypeWrap}>
      {avatarsMap.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setGroupAvatar(index);
            console.log(index);
          }}
        >
          <View style={[styles.groupIcon, { backgroundColor: color }]}></View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default GroupType;

const styles = StyleSheet.create({
  billTypeWrap: {
    flexDirection: 'row',
    marginBottom: '5%',
    gap: 10,
  },
  groupIcon: {
    height: 55,
    width: 55,
    borderRadius: 20,
  },
});
