import AsyncStorage from '@react-native-async-storage/async-storage';

const getAuthFromLocalStorage = async () => {
  let data = await AsyncStorage.getItem('@auth');
  //   console.log('Local Storage ==> ', data);
  return data;
};

export { getAuthFromLocalStorage };
