import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';

const GroupType = ({ setGroupAvatar, avatarsMap }) => {
  const [active, setActive] = useState(0);

  return (
    <View style={styles.billTypeWrap}>
      {avatarsMap.map((color, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setGroupAvatar(index);
            setActive(index); // Update the active state
          }}
        >
          <View
            style={[
              styles.groupIcon,
              { backgroundColor: color },
              index === active && styles.activeGroupIcon, // Apply border if active
            ]}
          ></View>
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
  activeGroupIcon: {
    borderWidth: 4,
    borderColor: '#000000',
    opacity: 0.6,
  },
});
