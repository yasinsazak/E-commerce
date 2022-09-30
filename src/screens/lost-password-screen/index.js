import React from 'react';
import {View, Image, Alert} from 'react-native';

import {Input, Button} from '../../components';
import Colors from '../../utils/colors';

import style from './style';

export const LostPasswordScreen = () => {
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
        value={null}
        placeholder={'E-posta'}
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
        keyboardType="email-address"
      />
      <Button theme="secondary" buttonText={'Şifreyi Sıfırla'} onPress={null} />
    </View>
  );
};
