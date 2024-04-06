import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Box = ({ input, output }) => {
  return (
    <View>
      <View style={styles.dispayContainer}>
        <Text style={styles.textHead}>{`${input}: `}</Text>
        <Text style={styles.textBody}>{output}</Text>
      </View>
    </View>
  );
};

export default Box;
const styles = StyleSheet.create({
  dispayContainer: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 12,
    width: 350,
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 18,
    alignItems: 'center',
  },
  textHead: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
  },
  textBody: {
    fontSize: 18,
    textAlign: 'left',
  },
});
