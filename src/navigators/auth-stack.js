import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Colors from '../utils/colors';
import {AppTab} from './app-tab';

export const AuthStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor={Colors.BLACK} />
      <NavigationContainer>
        <AppTab />
      </NavigationContainer>
    </SafeAreaView>
  );
};
