import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Image, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changePasswordProcess} from '../../api';

import {Input, Button} from '../../components';
import Colors from '../../utils/colors';

import style from './style';

export const ChangePasswordScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [oldPassword, setOldPassword] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@USERDATA').then(session => {
      setOldPassword(JSON.parse(session).password);
      setMail(JSON.parse(session).mail);
    });
  });

  const {data, status, isLoading} = useSelector(state => state.changePassword);

  const changePassword = () => {
    if (oldPassword === password) {
      if (newPassword === rePassword) {
        dispatch(
          changePasswordProcess({
            old_password: password,
            new_password: newPassword,
          }),
        );
      } else {
        Alert.alert('Şifreler Aynı Değil');
      }
    } else {
      Alert.alert('Eski Şifreyi Hatalı Girdiniz.');
    }
  };

  useEffect(() => {
    if (status === 'success') {
      AsyncStorage.setItem(
        '@USERDATA',
        JSON.stringify({password: newPassword}),
      );
    }
  }, [status]);
  console.log(status);

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
        value={password}
        setValue={setPassword}
        placeholder={'Eski Şifreyi Giriniz'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
        keyboardType="email-address"
      />
      <Input
        left="account"
        theme="primary"
        value={newPassword}
        setValue={setNewPassword}
        placeholder={'Yeni Şifreyi Giriniz'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
        keyboardType="email-address"
      />
      <Input
        left="account"
        theme="primary"
        value={rePassword}
        setValue={setRePassword}
        placeholder={'Yeni Şifreyi Tekrar Giriniz'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
        keyboardType="email-address"
      />
      <Button
        theme="secondary"
        buttonText={'Şifreyi Değiştir'}
        onPress={changePassword}
      />
    </View>
  );
};
