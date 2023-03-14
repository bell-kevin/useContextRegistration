import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserContext from './context/userContext'; // Add this line

import HomeScreen from './screens/HomeScreen';
import NameScreen from './screens/NameScreen';
import PhoneScreen from './screens/PhoneScreen';
import EmailScreen from './screens/EmailScreen';

const Stack = createStackNavigator();

export default App = () => {
  const initialState = {
    firstName: 'John',
    lastName: 'Doe',
    phone: '123-456-7890',
    email: 'johndoe@example.com',
  };

  return (
    <NavigationContainer>
      <UserContext.Provider value={initialState}>
        <Stack.Navigator initialRouteName="Registration">
          <Stack.Screen name="Registration" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Name" component={NameScreen} />
          <Stack.Screen name="Phone" component={PhoneScreen} />
          <Stack.Screen name="Email" component={EmailScreen} />
        </Stack.Navigator>
      </UserContext.Provider>
    </NavigationContainer>
  );
};
