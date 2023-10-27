import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { groupAvatarMap, ip } from '../config';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import axios from 'axios';

export default DisplayGroup = ({
  visible = false,
  avatar = 0,
  date = '',
  description = '',
  members = [],
  name = '',
  owner = '',
  bills = [],
  handlePress,
}) => {
  const [isVisible, setIsVisible] = useState(visible);
  const totalTransactions = bills.length;
  const participants = members.length;
  const [userName, setUserName] = useState();

  const getUserUrl = `http://${ip}/api/v1/user/`;

  const getUserName = async () => {
    try {
      const userDetails = await axios
        .get(getUserUrl + owner)
        .then((res) => {
          setUserName(res.data.userName);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      alert('error occured');
      console.log(error);
    }
  };

  if (!visible) return null;
  if (visible) getUserName();

  return (
    <View style={styles.displayGroupContainer}>
      <View style={styles.groupTopBar}>
        <View
          style={[
            styles.groupIcon,
            { backgroundColor: groupAvatarMap[avatar] },
          ]}
        ></View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: '1%' }}>
            {name.toLowerCase()}
          </Text>
          <Text>{description}</Text>
          <Text style={{ fontSize: 12, color: '#a6a6a6', paddingBottom: '2%' }}>
            {userName}
          </Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        {/* Members */}
        <View style={styles.participantsWrap}>
          <MaterialIcons name='group' size={24} color='#a6a6a6' />
          <Text style={{ color: '#a6a6a6' }}>{participants}</Text>
        </View>

        {/* Total Spends (to fix after adding expenses)*/}
        <View style={styles.participantsWrap}>
          <FontAwesome name='rupee' size={22} color='#a6a6a6' />
          <Text style={{ color: '#a6a6a6' }}>{totalTransactions}</Text>
        </View>

        {/* Join Button */}
        <View style={styles.joinButtonWrap}>
          <TouchableOpacity onPress={handlePress}>
            <View style={styles.joinButton}>
              <Text style={styles.buttonText}>join</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  displayGroupContainer: {
    borderWidth: 1,
    borderColor: '#B6B6B6',
    width: '90%',
    borderRadius: 20,
  },
  groupTopBar: {
    flexDirection: 'row',
    paddingTop: '2%',
    paddingLeft: '2%',
    gap: 10,
    // backgroundColor: 'blue',
  },
  bottomBar: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: '2%',
    paddingLeft: '4%',
    marginBottom: '2%',
    alignItems: 'center',
  },
  groupIcon: {
    height: 55,
    width: 55,
    borderRadius: 20,
  },
  participantsWrap: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  joinButtonWrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  joinButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10%',
    backgroundColor: '#0396FF',
    borderRadius: 28,
    width: 100,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 12,
  },
});
