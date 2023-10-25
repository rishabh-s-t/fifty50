import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './src/context/userContext';

import Login from './src/screens/auth/Login';
import Register from './src/screens/auth/Register';
import UserAvatar from './src/screens/UserAvatar';
import Home from './src/screens/Home';
import Group from './src/screens/Group';
import Bill from './src/screens/Bill';

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
            name='Group'
            component={Group}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name='Bill'
            component={Bill}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
