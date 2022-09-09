import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BasketScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const BasketStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="basket-screen" component={BasketScreen} />
    </Stack.Navigator>
  );
};
