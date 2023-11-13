import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Checkbox from 'expo-checkbox';
import { avatarArray } from '../config';

export default UserComponent = ({ users, selectedUserIds, onSelectionChange }) => {
  // console.log(JSON.stringify(users, null, 2))

  const handleUserSelect = (userId) => {
    let updatedSelection = []

    if (selectedUserIds.includes(userId)) {
      updatedSelection = selectedUserIds.filter((id) => id !== userId)
    } else {
      updatedSelection = [...selectedUserIds, userId]
    }
    onSelectionChange(updatedSelection);
  };
  //users is an  array of objects
  return (
    <ScrollView>
      <View>
        {users.map((user, key) => (
          <TouchableOpacity key={key} onPress={() => handleUserSelect(user._id)}>
            <View style={styles.selectMembers}>
              <View style={styles.selectMembersItems}>
                <Image
                  source={avatarArray[user.userAvatar].src}
                  style={styles.memberImage}
                />

                <View style={{ marginLeft: '5%' }}>
                  <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {user.userName}
                  </Text>
                  <Text style={{ fontSize: 12, color: '#666666' }}>
                    +91-{user.userPhoneNumber}
                  </Text>
                </View>
              </View>

              <View style={styles.checkboxWrap}>
                <Checkbox value={selectedUserIds.includes(user._id)} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  selectMembers: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#D4D4D4',
  },
  selectMembersItems: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberImage: {
    width: 48,
    height: 48,
    borderRadius: 100,
    marginLeft: 8,
    marginVertical: 8,
  },
  checkboxWrap: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
