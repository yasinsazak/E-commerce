import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import style from './style';

import {Button, Input} from '../../components';

import {useSelector, useDispatch} from 'react-redux';

import {registerProcess} from '../../api';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../utils/colors';

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [passwordVisibilty, setPasswordVisibilty] = useState(true);

  const {data, status, isLoading} = useSelector(state => state.authentication);

  const Register = () => {
    if (mail !== '' && name !== '' && password !== '' && telephone !== '') {
      dispatch(
        registerProcess({
          name: name,
          telephone: telephone,
          email: mail,
          password: password,
        }),
        navigation.navigate('login-screen'),
      );
    } else {
      Alert.alert('bos alan birakilamaz');
      console.log('error');
    }
  };

  const showPassword = () => {
    setPasswordVisibilty(!passwordVisibilty);
  };

  return (
    <View style={style.body}>
      <View style={style.container}>
        <Text style={style.title}>İletişim Biligileri</Text>
        <Input
          theme="primary"
          placeholder="İsim Soyisim"
          value={name}
          setValue={setName}
          outlineColor={Colors.WHITE}
          activeOutlineColor={Colors.RED}
        />
        <Input
          theme="primary"
          placeholder="Telefon"
          value={telephone}
          setValue={setTelephone}
          outlineColor={Colors.WHITE}
          activeOutlineColor={Colors.RED}
          keyboardType="phone-pad"
        />
      </View>
      <View style={style.container}>
        <Text style={style.title}>E-Posta & Şifre</Text>
        <Input
          theme="primary"
          placeholder="E-Posta"
          value={mail}
          setValue={setMail}
          outlineColor={Colors.WHITE}
          activeOutlineColor={Colors.RED}
          keyboardType="email-address"
        />
        <Input
          theme="primary"
          placeholder="Şifre"
          value={password}
          setValue={setPassword}
          secureTextEntry={passwordVisibilty}
          right="eye"
          onPress={showPassword}
          outlineColor={Colors.WHITE}
          activeOutlineColor={Colors.RED}
        />
      </View>
      <Button theme="secondary" buttonText="Kayıt Ol" onPress={Register} />
      <Button
        theme="secondary"
        buttonText="Giriş yap"
        onPress={() => navigation.navigate('login-screen')}
      />
    </View>
  );
};
