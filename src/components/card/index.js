import React from 'react';
import {View, Image} from 'react-native';

import style from './style';

export const Card = ({source}) => {
  return (
    <View style={style.container}>
      <Image source={source} />
    </View>
  );
};
