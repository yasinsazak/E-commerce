import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Button, Input} from '../../components';

import {loginProcess, logoutProcess} from '../../api';

import style from './style';
import Colors from '../../utils/colors';

export const AccountScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const logout = () => {
    dispatch(logoutProcess());
  };

  return (
    <View style={style.body}>
      <Image
        style={style.logo}
        source={{
          uri: 'https://narevim.com/panel/uploads/settings_v/logo/narlogo.png',
        }}
      />
      <Button
        buttonText={'Siparişlerim'}
        theme="fifth"
        icon={'clock-check-outline'}
      />
      <Button buttonText={'Favorilerim'} theme="fifth" icon={'heart'} />
      <Button
        buttonText={'Adreslerim'}
        theme="fifth"
        icon={'google-maps'}
        onPress={() => {
          navigation.navigate('address-screen');
        }}
      />
      <Button
        buttonText={'Kullanıcı Bilgileri'}
        theme="fifth"
        icon={'account'}
        onPress={() => {
          navigation.navigate('member-info-screen');
        }}
      />
      <Button
        buttonText={'Şifre Değiştir'}
        theme="fifth"
        icon={'key'}
        onPress={() => {
          navigation.navigate('change-password-screen');
        }}
      />
      <Button
        buttonText={'Çıkış yap'}
        theme="fifth"
        icon={'logout'}
        onPress={logout}
      />
    </View>
  );
};
