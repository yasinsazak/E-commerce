import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import style from './style';

export const MemberInfoScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={style.body}>
      <Text>İsim Soyisim</Text>
      <Text>E-Posta adresi</Text>
      <Text>Telefon Numarası</Text>
    </View>
  );
};
