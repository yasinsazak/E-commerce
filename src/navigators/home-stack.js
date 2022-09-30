import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ProductDetailScreen, BrandProductScreen} from '../screens';
import Colors from '../utils/colors';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: Colors.RED,
        headerStyle: {backgroundColor: Colors.BLACK},
      }}>
      <Stack.Screen
        name="home-screen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="brand-product-screen"
        component={BrandProductScreen}
      />
      <Stack.Screen
        name="product-detail-screen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
