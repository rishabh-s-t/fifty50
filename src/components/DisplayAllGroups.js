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

export default DisplayAllGroups = ({ navigation, groups }) => {
  const [activeGroupId, setActiveGroupId] = useState();

  useEffect(() => {
    // console.log(JSON.stringify(groups, null, 2));
  }, [activeGroupId]);

  if (!groups) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='#0396FF' />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {groups.map((group, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setActiveGroupId(groups[index]._id);
            navigation.navigate('ActiveGroup', {
              activeGroup: groups[index]._id,
            });
          }}
        >
          <View style={styles.groupsContainer}>
            <View style={styles.groupContainer}>
              <View style={styles.groupMetaContainer}>
                <Text style={styles.groupTitle}>{group.groupName}</Text>
                <Text style={{ fontSize: 16, color: '#0396FF' }}>
                  {group.totalExpenses} Bills
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
  container: {
    height: '100%',
    width: 352,
    gap: 5,
  },
  groupsContainer: {},
  groupContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 120,
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
