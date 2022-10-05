import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  ProductDetailScreen,
  BrandProductScreen,
  FavoritteScreen,
  SearchProductScreen,
} from '../screens';
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
      <Stack.Screen name="favorite-screen" component={FavoritteScreen} />
      <Stack.Screen
        name="product-detail-screen"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="search-product-screen"
        component={SearchProductScreen}
      />
    </Stack.Navigator>
  );
};
