import React from 'react';

import {AccountScreen} from '../screens';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="account-screen" component={AccountScreen} />
    </Stack.Navigator>
  );
};
