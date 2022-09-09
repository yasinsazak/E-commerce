import {View, Text, Image} from 'react-native';
import React from 'react';

import styles from './style';
import {Button, Input} from '../../components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/colors';

export const AccountScreen = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://narevim.com/panel/uploads/settings_v/logo/narlogo.png',
        }}
      />
      <Input
        left="account"
        theme="primary"
        placeholder={'E-posta'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
      />
      <Input
        left="key-variant"
        theme="primary"
        placeholder={'Şifre'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
      />
      <Button theme="secondary" buttonText={'Giriş Yap'} />
      <Button theme="tertiary" buttonText={'Kayıt Ol'} />
      <Button
        theme="quaternary"
        buttonText={'Şifremi unuttum'}
        // onPress={() => navigation.navigate('')}
      />
    </View>
  );
};
