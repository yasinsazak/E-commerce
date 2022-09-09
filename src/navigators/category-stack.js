import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CategoriesScreen} from '../screens';

const Stack = createNativeStackNavigator();

export const CategoryStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="categories-screen" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};
