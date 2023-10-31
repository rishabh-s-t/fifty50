import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { avatarArray } from '../config';
import SelectDropdown from 'react-native-select-dropdown';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default ExpenseOwnerDropdown = ({ users, setPaidBy }) => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (users && users.length > 0) {
      const temporaryUserDetailsArray = users.map((user) => {
        return {
          title: user.userName,
          image: avatarArray[user.userAvatar].src,
          id: user._id,
          phoneNumber: user.userPhoneNumber,
        };
      });
      setUserDetails(temporaryUserDetailsArray);
    }
  }, [users]);

  return (
    <Animatable.View
      animation='fadeIn'
      duration={1000}
      style={styles.dropdownContainer}
    >
      <SelectDropdown
        data={userDetails}
        onSelect={(selectedItem, index) => {
          setPaidBy(selectedItem.id);
          console.log(selectedItem.id, index);
        }}
        buttonStyle={styles.dropdownBtnStyle}
        renderCustomizedButtonChild={(selectedItem, index) => {
          return (
            <View style={styles.dropdownBtnChildStyle}>
              <View style={styles.dropdownBtnGridColumn1}>
                {selectedItem ? (
                  <Image
                    source={selectedItem.image}
                    style={styles.dropdownBtnImage}
                  />
                ) : (
                  <FontAwesome name='user' size={32} color='#b4b4b4' />
                )}
              </View>
              <View style={styles.dropdownBtnGridColumn2}>
                <Text style={styles.dropdownBtnTxt}>
                  {selectedItem ? selectedItem.title : 'who paid?'}
                </Text>
              </View>
              <View style={styles.dropdownBtnGridColumn3}>
                <FontAwesome
                  name='chevron-down'
                  color={'#444'}
                  size={18}
                  style={{ justifyContent: 'flex-end' }}
                />
              </View>
            </View>
          );
        }}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        selectedRowStyle={styles.dropdownSelectedRowStyle}
        renderCustomizedRowChild={(item, index) => {
          return (
            <Animatable.View
              animation='fadeInDown'
              duration={500}
              style={styles.dropdownRowChildStyle}
            >
              <View style={styles.dropdownRowChildColumn1}>
                <Image source={item.image} style={styles.dropdownRowImage} />
              </View>

              <View style={styles.dropdownRowChildColumn2}>
                <Text style={styles.dropdownRowTxtTitle}>{item.title}</Text>
                <Text style={styles.dropdownRowTxtPhone}>
                  +91-{item.phoneNumber}
                </Text>
              </View>
            </Animatable.View>
          );
        }}
      />
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {},
  dropdownBtnStyle: {
    width: '90%',
    height: 60,
    backgroundColor: '#ECECEC',
    paddingHorizontal: 0,
    borderRadius: 12,
  },
  dropdownBtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownBtnGridColumn1: {
    width: '10%',
  },
  dropdownBtnGridColumn2: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownBtnGridColumn3: {
    width: '10%',
  },
  dropdownBtnImage: {
    width: 45,
    height: 45,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  dropdownBtnTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 12,
  },
  dropdownDropdownStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    transform: [{ translateY: -60 }],
  },
  dropdownRowStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e1e1e1',
    backgroundColor: '#ececec',
    height: '50%',
    paddingVertical: 10,
  },
  dropdownSelectedRowStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  dropdownRowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    gap: 20,
  },
  dropdownRowChildColumn1: {},
  dropdownRowChildColumn2: {
    width: '80%',
  },
  dropdownRowImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  dropdownRowTxtTitle: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
    marginHorizontal: 12,
  },
  dropdownRowTxtPhone: {
    color: '#666666',
    marginHorizontal: 12,
  },
});
