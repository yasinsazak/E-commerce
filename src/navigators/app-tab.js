import React from 'react';

import Colors from '../utils/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, LoginStack, CategoryStack, BasketStack} from './';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'home-stack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'category-stack') {
            iconName = focused ? 'view-list' : 'view-list-outline';
          } else if (route.name === 'basket-stack') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'login-stack') {
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.RED,
        tabBarInactiveTintColor: Colors.GRAY,
        tabBarActiveBackgroundColor: Colors.BLACK,
        tabBarInactiveBackgroundColor: Colors.BLACK,
      })}>
      <Tab.Screen
        options={{title: 'Anasayfa'}}
        name="home-stack"
        component={HomeStack}
      />
      <Tab.Screen
        options={{title: 'Kategoriler'}}
        name="category-stack"
        component={CategoryStack}
      />
      <Tab.Screen
        options={{title: 'Sepetim'}}
        name="basket-stack"
        component={BasketStack}
      />
      <Tab.Screen
        options={{title: 'Hesabım'}}
        name="login-stack"
        component={LoginStack}
      />
    </Tab.Navigator>
  );
};
