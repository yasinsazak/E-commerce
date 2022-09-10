import React from 'react';

import {AccountScreen, RegisterScreen} from '../screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="account-screen" component={AccountScreen} />
      <Stack.Screen name="register-screen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};
