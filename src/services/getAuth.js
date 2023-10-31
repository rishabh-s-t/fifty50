import AsyncStorage from '@react-native-async-storage/async-storage';

const getAuthFromLocalStorage = async () => {
  let data = await AsyncStorage.getItem('@auth');
  return data;
};

export { getAuthFromLocalStorage };

/* 
Output format
{
  "success":true,
  "message":"login successfully",
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNiYjRkMTc2Yzk2NTkwNjdhZWRjN2EiLCJpYXQiOjE2OTg3NDI5MTYsImV4cCI6MTY5OTM0NzcxNn0.1kDk7Jub8Jh15q6Oe3b18fzTCYwf4xpGHvYdtCWMGNo",
  "user":{
    "_id":"653bb4d176c9659067aedc7a",
    "userPhoneNumber":8203082010,
    "userEmailID":"chikki@fifty.com",
    "userName":"Chikki",
    "password":"$2b$10$hySvsFkBY00QgFexVmNSZe87FcqoMuc3brfUKswrzjG3NrtuAe1hW",
    "upiID":"",
    "groupsInvolved":["653bb6774800af15e0cb7370","653f4eea70443466711eeaaa"],
    "showAvatar":false,
    "createdDate":"2023-10-27T13:02:09.395Z",
    "__v":1,
    "userAvatar":4
  }
}
*/
