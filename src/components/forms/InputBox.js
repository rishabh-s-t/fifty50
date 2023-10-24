import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

// custom fonts
// import { useFonts } from 'expo-font'

export default InputBox = ({
    inputTitle,
    placeholderName,
    placeholderTextColor = '#939393',
    autoComplete,
    keyboardType,
    secureTextEntry = false,
    value,
    setValue,
}) => {

    // Fonts
    //TODO
    //Having some error which ill solve later

    //fonts path
    // const fontsUrl = '../../../assets/fonts'

    // const [fontsLoaded] = useFonts({
    //     'NexaBold': require(`${fontsUrl}/Nexa Bold.ttf`),
    //     'KleinBold': require(`${fontsUrl}/Klein-Bold.ttf`),
    // });

    return (
        <View>
            <Text style={styles.fieldTitle}>{inputTitle}</Text>
            <TextInput style={styles.fieldBox}
                placeholder={placeholderName}
                placeholderTextColor={placeholderTextColor}
                autoComplete={autoComplete}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => setValue(text)} />
        </View>
    )
}

const styles = StyleSheet.create({
    fieldTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 10,
    },
    fieldBox: {
        backgroundColor: '#ECECEC',
        borderRadius: 12,
        width: '90%',
        height: 60,
        paddingHorizontal: 20,
        marginBottom: 18,
    },
})