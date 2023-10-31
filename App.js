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

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <Home />
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
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
