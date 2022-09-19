import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CategoriesScreen,
  SecondCategoriesScreen,
  ThirdCategoriesScreen,
} from '../screens';
import Colors from '../utils/colors';

const Stack = createNativeStackNavigator();

export const CategoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="categories-screen"
        component={CategoriesScreen}
      />
      <Stack.Screen
        name="second-categories-screen"
        component={SecondCategoriesScreen}
        options={({route}) => ({
          title: route.params.title,
          headerTintColor: Colors.RED,
          headerStyle: {backgroundColor: Colors.BLACK},
        })}
      />
      <Stack.Screen
        name="third-categories-screen"
        component={ThirdCategoriesScreen}
        options={({route}) => ({
          title: route.params.title,
          headerTintColor: Colors.RED,
          headerStyle: {backgroundColor: Colors.BLACK},
        })}
      />
    </Stack.Navigator>
  );
};
