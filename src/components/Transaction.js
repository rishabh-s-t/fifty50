import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default Transaction = ({
  billAvatar,
  billTitle,
  billAmount,
  billStatus,
  splitParticipants,
  splitAmount,
  billDescription
}) => {
  const expenseAvatar = {
    0: require('../../assets/icons/bills/food.png'),
    1: require('../../assets/icons/bills/default.png'),
    2: require('../../assets/icons/bills/bill.png'),
    3: require('../../assets/icons/bills/rent.png'),
    4: require('../../assets/icons/bills/travel.png'),
  };

  const status = { 0: 'paid', 1: 'pay', 2: 'not inv' };
  const touchableMessage = {
    0: 'already paid',
    1: 'tap to pay',
    2: 'no need to pay',
  };
  const billStatusMessage = status[billStatus];

  const billStyle = ['#397c37', '#0396FF', '#F6CF43'];

  const statusColor = billStyle[billStatus];

  if (billStatus === 0 || billStatus === 2) disabled = true;
  else disabled = false;

  return (
    <View style={styles.transactionContainer}>
      <View style={styles.billMetaContainer}>
        <Image source={expenseAvatar[billAvatar]} style={styles.billType} />
        <View style={{ marginTop: '4%', marginLeft: '4%' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{billTitle}</Text>
          <Text>{billDescription}</Text>
          <Text>Total Bill Rs. {billAmount}</Text>
        </View>

        <View style={styles.statusContainer}>
          <View style={[styles.billStatus, { backgroundColor: statusColor }]}>
            <Text
              style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff' }}
            >
              {billStatusMessage}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.splitAmountContainer}>
        <Text style={{ fontSize: 16, marginLeft: '4%', marginTop: '2%' }}>
          Split into {splitParticipants} (Rs. {splitAmount})
        </Text>
      </View>

      <View style={{ alignItems: 'flex-end', marginRight: '4%' }}>
        <TouchableOpacity disabled={disabled}>
          <View
            style={{
              backgroundColor: statusColor,
              borderRadius: 20,
              height: 48,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
              {touchableMessage[billStatus]}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionContainer: {
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 20,
    width: '90%',
    height: 142,
  },
  billType: {
    borderRadius: 10,
    height: 47,
    width: 47,
    marginTop: '4%',
    marginLeft: '4%',
  },
  billMetaContainer: {
    flexDirection: 'row',
  },
  statusContainer: {
    flex: 1,
    width: '90%',
    alignItems: 'flex-end',
  },
  billStatus: {
    width: 48,
    height: 48,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splitAmountContainer: {
    flexDirection: 'column',
  },
});
