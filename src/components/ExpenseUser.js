import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { avatarArray, ip } from '../config';
import axios from 'axios';
import LoadingIndicator from './LoadingIndicator';

const ExpenseUser = ({ name, balance, id }) => {
  const [memberDetails, setMemberDetails] = useState();

  useEffect(() => {
    console.log(JSON.stringify(memberDetails, null, 2));
  }, [memberDetails]);

  useEffect(() => {
    const getMember = async () => {
      const userEndpoint = `http://${ip}/api/v1/user/`;

      try {
        const user = await axios.get(userEndpoint + id);
        setMemberDetails(user.data);
      } catch (error) {
        console.log(error);
        console.log('Error while getting user details');
      }
    };

    getMember();
  }, []);

  if (!memberDetails) {
    // Render a placeholder or loading indicator until memberDetails is received
    return <LoadingIndicator />;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        marginVertical: '2%',
      }}
    >
      <View style={{ width: '16%' }}>
        <Image
          source={avatarArray[memberDetails.userAvatar].src}
          style={styles.userAvatar}
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          width: '50%',
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{name}</Text>
        <Text style={{ fontSize: 14, color: '#303030' }}>
          +91-{memberDetails.userPhoneNumber}
        </Text>
      </View>

      <View
        style={{
          alignItems: 'flex-end',
          width: '34%',
        }}
      >
        {balance < 0 ? (
          <Text style={{ color: '#E54141', marginRight: '10%' }}>
            Owes ${Math.abs(balance)}
          </Text>
        ) : (
          <Text style={{ color: '#397C37', marginRight: '10%' }}>
            Paid ${balance}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ExpenseUser;

const styles = StyleSheet.create({
  userAvatar: {
    height: 48,
    width: 48,
    borderRadius: 25,
  },
});
