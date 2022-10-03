import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  LoginScreen,
  AccountScreen,
  RegisterScreen,
  LostPasswordScreen,
  ChangePasswordScreen,
  MemberInfoScreen,
  AddressScreen,
  AddAddressScreen,
} from '../screens';
import {checkSignedIn} from '../redux/slice/authenticationSlice';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {loginProcess} from '../api';

const Stack = createNativeStackNavigator();

export const LoginStack = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('@USERDATA').then(session => {
      if (session != null) {
        dispatch(loginProcess(JSON.parse(session)));
      } else {
        dispatch(checkSignedIn('0'));
      }
    });
  }, [check]);

  const check = useSelector(state => state.authentication.isSignedIn);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {check == '1' ? (
        <Stack.Screen name="account-screen" component={AccountScreen} />
      ) : (
        <Stack.Screen name="login-screen" component={LoginScreen} />
      )}
      <Stack.Screen name="register-screen" component={RegisterScreen} />
      <Stack.Screen
        name="lost-password-screen"
        component={LostPasswordScreen}
      />
      <Stack.Screen
        name="change-password-screen"
        component={ChangePasswordScreen}
      />
      <Stack.Screen name="member-info-screen" component={MemberInfoScreen} />
      <Stack.Screen name="address-screen" component={AddressScreen} />
      <Stack.Screen name="add-address-screen" component={AddAddressScreen} />
    </Stack.Navigator>
  );
};
