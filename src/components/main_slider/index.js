import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import style from './style';

export const MainSlider = ({onPress, url, item}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={style.image} source={{uri: url + item.img_url}} />
      </TouchableOpacity>
    </View>
  );
};
