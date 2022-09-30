import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Button, Input} from '../../components';

import {loginProcess} from '../../api';

import style from './style';
import Colors from '../../utils/colors';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibilty, setPasswordVisibilty] = useState(true);

  const login = () => {
    dispatch(loginProcess({email: mail, password: password}));
    navigation.navigate('account-screen');
  };

  const showPassword = () => {
    setPasswordVisibilty(!passwordVisibilty);
  };

  return (
    <View style={style.body}>
      <Image
        style={style.logo}
        source={{
          uri: 'https://narevim.com/panel/uploads/settings_v/logo/narlogo.png',
        }}
      />
      <Input
        left="account"
        theme="primary"
        value={mail}
        setValue={setMail}
        placeholder={'E-posta'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
        keyboardType="email-address"
      />
      <Input
        left="key-variant"
        right="eye"
        theme="primary"
        value={password}
        setValue={setPassword}
        secureTextEntry={passwordVisibilty}
        placeholder={'Şifre'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
        onPress={showPassword}
      />
      <Button theme="secondary" buttonText={'Giriş Yap'} onPress={login} />
      <Button
        theme="tertiary"
        buttonText={'Kayıt Ol'}
        onPress={() => {
          navigation.navigate('register-screen');
        }}
      />
      <Button
        theme="quaternary"
        buttonText={'Şifremi unuttum'}
        onPress={() => {
          navigation.navigate('lost-password-screen');
        }}
      />
    </View>
  );
};
