import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './src/context/userContext';

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import UserAvatar from './src/screens/UserAvatar';
import Home from './src/screens/Home';
import CreateGroup from './src/screens/CreateGroup';
import AddUserToGroup from './src/screens/AddUserToGroup';
import AddExpense from './src/screens/AddExpense.js';
import UserDetails from './src/screens/UserDetails.js';
import ActiveGroup from './src/screens/ActiveGroup';
import Expense from './src/screens/Expense';
import EditUser from './src/screens/EditUser';
import { YellowBox } from 'react-native';

console.disableYellowBox = true;

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Register'
            component={Register}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='UserAvatar'
            component={UserAvatar}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='CreateGroup'
            component={CreateGroup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Bill'
            component={AddExpense}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='JoinGroup'
            component={AddUserToGroup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='UserDetails'
            component={UserDetails}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='ActiveGroup'
            component={ActiveGroup}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='AddExpense'
            component={AddExpense}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Expense'
            component={Expense}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='EditUser'
            component={EditUser}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
