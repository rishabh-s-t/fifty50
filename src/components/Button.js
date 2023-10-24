import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

//custom font
// import { useFonts } from 'expo-font'

export default Button = ({ buttonText, handleSubmit }) => {
  // Fonts
  //TODO
  //Having some error which ill solve later

  //fonts path
  // const fontsUrl = '../../assets/fonts'

  // const [fontsLoaded] = useFonts({
  //     'NexaBold': require(`${fontsUrl}/Nexa Bold.ttf`),
  //     'KleinBold': require(`${fontsUrl}/Klein-Bold.ttf`),
  // });
  return (
    <View>
      <TouchableOpacity style={styles.confirmButton} onPress={handleSubmit}>
        <Text style={styles.confirmText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    marginTop: '2%',
    backgroundColor: '#0396FF',
    borderRadius: 12,
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
