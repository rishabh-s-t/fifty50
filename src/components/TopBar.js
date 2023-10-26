import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default TopBar = ({ topBarTitle, backButtonHandler }) => {
  return (
    <View>
      {/* Top Bar */}
      <View style={styles.topBarContainer}>
        {/* Back Button */}
        <TouchableOpacity
          style={[styles.topBarItem]}
          onPress={backButtonHandler}
        >
          <View>
            <Text style={{ fontSize: 18 }}>{'<'}</Text>
          </View>
        </TouchableOpacity>

        {/* Screen Title */}
        <View style={[styles.topBarItem, { flex: 1 }]}>
          <Text style={{ fontSize: 18 }}>{topBarTitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  topBarItem: {
    width: '30%',
    height: 50,
    marginLeft: 8,
    marginTop: 8,
    padding: 5,
    justifyContent: 'center',
  },
});
