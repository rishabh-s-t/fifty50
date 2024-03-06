import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ip } from '../config';

export default DisplayIndividualMember = ({ member }) => {
  const [memberDetails, setMemberDetails] = useState();

  useEffect(() => {
    const getMember = async () => {
      const userEndpoint = `htpp://${ip}/api/v1/user/`;

      try {
        const user = await axios.get(userEndpoint + member);
        setMemberDetails(user);
      } catch (error) {
        console.log(error);
        console.log('Error while getting user details');
      }
    };

    getMember();
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(memberDetails, null, 2));
  }, [memberDetails]);

  return (
    <View>
      <Text>{member.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
