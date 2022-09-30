import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import style from './style';

export const ProductDetailSlider = ({url, item}) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: url}} />
    </View>
  );
};
