import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default DisplayAllGroups = ({ groups, navigation }) => {
  const [numberOfBills, setNumberOfBills] = useState();
  const [groupName, setGroupName] = useState();
  const [activeGroup, setActiveGroup] = useState();

  const moveToActiveGroup = async () => {
    setActiveGroup(groups[index]._id);
    navigation.navigate('ActiveGroupScreen');
  };

  if (!groups) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }
  return (
    <View style={{ flexDirection: 'row', gap: 5 }}>
      {groups.map((group, index) => (
        <TouchableOpacity key={index} onPress={moveToActiveGroup}>
          <View style={styles.groupsContainer}>
            <View style={styles.groupContainer}>
              <View style={styles.groupMetaContainer}>
                <Text style={styles.groupTitle}>
                  {!group.groupName ? 'loading..' : group.groupName}
                </Text>
                <Text style={{ fontSize: 16, color: '#0396FF' }}>
                  {!group.numberOfBills ? 0 : group.numberOfBills} Bills
                </Text>

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    paddingBottom: 15,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 15,
                      alignItems: 'center',
                    }}
                  >
                    <FontAwesome5 name='users' size={24} color='#888888' />
                    <Text style={{ fontSize: 16, color: '#888888' }}>
                      {!group.usersInvolved.length
                        ? 0
                        : group.usersInvolved.length}{' '}
                      Members
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  groupsContainer: {},
  groupContainer: {
    backgroundColor: '#FFFFFF',
    height: 180,
    width: 200,
    borderColor: '#E6E6E6',
    borderRadius: 20,
    borderWidth: 3,
  },
  groupMetaContainer: {
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
  },
  groupTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
