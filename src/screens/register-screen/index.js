import {View, Text} from 'react-native';
import React from 'react';
import style from './style';

import {Button, Input} from '../../components';

export const RegisterScreen = () => {
  return (
    <View style={style.body}>
      <View style={style.container}>
        <Text style={style.title}>İletişim Biligileri</Text>
        <Input
          theme="primary"
          placeholder="İsim"
          value={null}
          setValue={null}
        />
        <Input theme="primary" placeholder="Soyisim" />
        <Input theme="primary" placeholder="Telefon" />
      </View>
      <View style={style.container}>
        <Text style={style.title}>E-Posta & Şifre</Text>
        <Input theme="primary" placeholder="E-Posta" />
        <Input theme="primary" placeholder="Şifre" />
      </View>
      <Button theme="secondary" buttonText="Kayıt Ol" />
    </View>
  );
};
