import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, ProductDetailScreen} from '../screens';
import Colors from '../utils/colors';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home-screen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="product-detail-screen"
        component={ProductDetailScreen}
        options={({route}) => ({
          title: route.params.title,
          headerTintColor: Colors.RED,
          headerStyle: {backgroundColor: Colors.BLACK},
        })}
      />
    </Stack.Navigator>
  );
};
